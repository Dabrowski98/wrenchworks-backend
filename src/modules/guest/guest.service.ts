import { Injectable } from '@nestjs/common';
import {
  CreateOneGuestArgs,
  UpdateOneGuestArgs,
  DeleteOneGuestArgs,
  FindUniqueGuestArgs,
  FindManyGuestArgs,
  DeleteManyGuestArgs,
} from './dto';
import { Guest } from './dto/guest.model';
import { PrismaService } from 'src/database/prisma.service';
import { Vehicle } from '../vehicle/dto/vehicle.model';
import { RecordNotFoundError } from 'src/common/custom-errors/errors.config';
import { Customer } from '../customer/dto';
import { ServiceRequest } from '../service-request/dto';
import { AbilityFactory, Action } from '../ability';
import { JwtEmployeePayload } from '../auth/employee-auth/custom-dto/jwt-employee-payload';
import { ForbiddenError, subject } from '@casl/ability';
import { JwtUserPayload } from '../auth/user-auth/custom-dto/jwt-user-payload';
import { accessibleBy } from '@casl/prisma';

@Injectable()
export class GuestService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly abilityFactory: AbilityFactory,
  ) {}

  async findOne(
    currentEntity: JwtEmployeePayload | JwtUserPayload,
    args: FindUniqueGuestArgs,
  ): Promise<Guest> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    const guest = await this.prisma.guest.findFirst({
      where: { AND: [accessibleBy(ability).Guest, args.where] },
    });

    if (!guest) throw new RecordNotFoundError(Guest);
    return guest;
  }

  async findMany(
    currentEntity: JwtEmployeePayload | JwtUserPayload,
    args?: FindManyGuestArgs,
  ): Promise<Guest[]> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    return this.prisma.guest.findMany({
      where: { AND: [accessibleBy(ability).Guest, args?.where || {}] },
    });
  }

  async updateGuest(
    currentEntity: JwtEmployeePayload | JwtUserPayload,
    args: UpdateOneGuestArgs,
  ): Promise<Guest> {
    const { where, data } = args;
    const ability = await this.abilityFactory.defineAbility(currentEntity);

    const guest = await this.prisma.guest.findUnique({
      where,
      include: {
        serviceRequest: { select: { workshopId: true } },
      },
    });

    if (!guest) throw new RecordNotFoundError(Guest);

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Update,
      subject('Guest', guest),
    );
    return this.prisma.guest.update({
      where,
      data,
    });
  }

  async delete(
    currentEntity: JwtEmployeePayload | JwtUserPayload,
    args: DeleteOneGuestArgs,
  ): Promise<Boolean> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);

    const guest = await this.prisma.guest.findUnique({
      where: args.where,
      include: {
        serviceRequest: { select: { workshopId: true } },
      },
    });

    if (!guest) throw new RecordNotFoundError(Guest);

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Delete,
      subject('Guest', guest),
    );

    return this.prisma.guest
      .delete({
        where: args.where,
      })
      .then(() => true)
      .catch(() => false);
  }

  async deleteMany(
    currentEntity: JwtEmployeePayload | JwtUserPayload,
    args: DeleteManyGuestArgs,
  ): Promise<boolean> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);

    const guests = await this.prisma.guest.findMany({
      where: { AND: [accessibleBy(ability).Guest, args.where] },
      include: {
        serviceRequest: { select: { workshopId: true } },
      },
    });

    guests.forEach((guest) => {
      ForbiddenError.from(ability).throwUnlessCan(
        Action.Delete,
        subject('Guest', guest),
      );
    });

    return this.prisma.guest
      .deleteMany({
        where: { AND: [accessibleBy(ability).Guest, args.where] },
      })
      .then(() => true)
      .catch(() => false);
  }

  //RESOLVE METHODS

  async vehicle(guestId: bigint): Promise<Vehicle> {
    return (
      await this.prisma.guest.findUnique({
        where: { guestId },
        include: { vehicle: true },
      })
    ).vehicle;
  }

  async serviceRequest(guestId: bigint): Promise<ServiceRequest> {
    return (
      await this.prisma.guest.findUnique({
        where: { guestId },
        include: { serviceRequest: true },
      })
    ).serviceRequest;
  }

  async customer(guestId: bigint): Promise<Customer> {
    return (
      await this.prisma.guest.findUnique({
        where: { guestId },
        include: { customer: true },
      })
    ).customer;
  }
}
