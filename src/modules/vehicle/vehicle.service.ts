import { PrismaService } from 'src/database/prisma.service';
import { Employee } from '../employee/dto/employee.model';
import { Service } from '../service/dto/service.model';
import {
  BadRequestError,
  RecordNotFoundError,
} from 'src/common/custom-errors/errors.config';
import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '../user/dto';
import {
  CreateOneVehicleArgs,
  DeleteOneVehicleArgs,
  FindManyVehicleArgs,
  FindUniqueVehicleArgs,
  UpdateOneVehicleArgs,
  Vehicle,
  VehicleCount,
  DeleteManyVehicleArgs,
} from './dto';
import { Guest } from '../guest/dto';
import { ServiceRequest } from '../service-request/dto';
import { VehicleModel } from '../vehicle-model/dto';
import { Customer } from '../customer/dto';
import { VehicleDetails } from '../vehicle-details/dto';
import { JwtUserPayload } from '../auth/user-auth/custom-dto/jwt-user-payload';
import { JwtEmployeePayload } from '../auth/employee-auth/custom-dto/jwt-employee-payload';
import { AbilityFactory, Action } from '../ability/ability.factory';
import { PureAbility, subject } from '@casl/ability';
import { ForbiddenError } from '@casl/ability';
import { accessibleBy } from '@casl/prisma';
import { isUserPayload } from 'src/common/utils/type-guards';
import { CreateOneVehicleForUserArgs } from './custom-dto';

@Injectable()
export class VehicleService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly abilityFactory: AbilityFactory,
  ) {}

  async createForUser(
    currentUser: JwtUserPayload,
    args: CreateOneVehicleForUserArgs,
  ): Promise<Vehicle> {
    const ability = await this.abilityFactory.defineAbility(currentUser);
    ForbiddenError.from(ability).throwUnlessCan(
      Action.Create,
      subject('Vehicle', { userId: args.data.user.connect.userId } as any),
    );
    return this.prisma.vehicle.create(args);
  }

  async createForCustomer(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args: CreateOneVehicleArgs,
  ): Promise<Vehicle> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Create,
      subject('Vehicle', {
        customer: { workshopId: args.data.customer.connect.workshopId },
      } as any),
    );
    return this.prisma.vehicle.create(args);
  }
  async findOne(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args: FindUniqueVehicleArgs,
  ): Promise<Vehicle> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    const vehicle = await this.prisma.vehicle.findFirst({
      where: { AND: [accessibleBy(ability).Vehicle, args.where] },
    });

    if (!vehicle) throw new RecordNotFoundError(Vehicle);

    return vehicle;
  }

  async findMany(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args?: FindManyVehicleArgs,
  ): Promise<Vehicle[]> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    return this.prisma.vehicle.findMany({
      where: {
        AND: [accessibleBy(ability).Vehicle, args?.where || {}],
      },
      ...args,
    });
  }

  async update(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args: UpdateOneVehicleArgs,
  ): Promise<Vehicle> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    const vehicle = await this.prisma.vehicle.findUnique({
      where: args.where,
      include: { customer: { select: { workshopId: true, userId: true } } },
    });

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Update,
      subject('Vehicle', vehicle),
    );

    return this.prisma.vehicle.update({
      data: { ...args.data },
      where: args.where,
    });
  }

  async delete(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args: DeleteOneVehicleArgs,
  ): Promise<boolean> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    const vehicle = await this.prisma.vehicle.findUnique({
      where: args.where,
      include: {
        customer: { select: { workshopId: true, userId: true } },
      },
    });
    ForbiddenError.from(ability).throwUnlessCan(
      Action.Update,
      subject('Vehicle', vehicle),
    );

    return await this.prisma.vehicle
      .delete({
        where: args.where,
      })
      .then(() => true)
      .catch(() => false);
  }

  async deleteMany(
    currentEntity: JwtEmployeePayload | JwtUserPayload,
    args: DeleteManyVehicleArgs,
  ): Promise<boolean> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);

    const vehicles = await this.prisma.vehicle.findMany({
      where: { AND: [accessibleBy(ability).Vehicle, args.where] },
      include: {
        customer: {
          select: {
            workshopId: true,
            userId: true,
          },
        },
      },
    });

    vehicles.forEach((vehicle) => {
      ForbiddenError.from(ability).throwUnlessCan(
        Action.Delete,
        subject('Vehicle', vehicle),
      );
    });

    return this.prisma.vehicle
      .deleteMany({
        where: { AND: [accessibleBy(ability).Vehicle, args.where] },
      })
      .then(() => true)
      .catch(() => false);
  }

  // RESOLVE METHODS

  async serviceRequests(
    ability: PureAbility,
    vehicleId: bigint,
  ): Promise<ServiceRequest[]> {
    return await this.prisma.serviceRequest.findMany({
      where: { AND: [accessibleBy(ability).ServiceRequest, { vehicleId }] },
    });
  }

  async services(ability: PureAbility, vehicleId: bigint): Promise<Service[]> {
    return await this.prisma.service.findMany({
      where: { AND: [accessibleBy(ability).Service, { vehicleId }] },
    });
  }

  async vehicleModel(
    ability: PureAbility,
    vehicleId: bigint,
  ): Promise<VehicleModel> {
    return await this.prisma.vehicleModel.findFirst({
      where: {
        AND: [
          accessibleBy(ability).VehicleModel,
          { vehicles: { some: { vehicleId } } },
        ],
      },
    });
  }

  async user(ability: PureAbility, vehicleId: bigint): Promise<User | null> {
    return await this.prisma.user.findFirst({
      where: {
        AND: [
          accessibleBy(ability).User,
          { vehicles: { some: { vehicleId } } },
        ],
      },
    });
  }

  async customer(ability: PureAbility, vehicleId: bigint): Promise<Customer> {
    return await this.prisma.customer.findFirst({
      where: {
        AND: [
          accessibleBy(ability).Customer,
          { vehicles: { some: { vehicleId } } },
        ],
      },
    });
  }

  async guest(ability: PureAbility, vehicleId: bigint): Promise<Guest | null> {
    return await this.prisma.guest.findFirst({
      where: {
        AND: [accessibleBy(ability).Guest, { vehicle: { vehicleId } }],
      },
    });
  }

  async vehicleDetails(
    ability: PureAbility,
    vehicleId: bigint,
  ): Promise<VehicleDetails | null> {
    return await this.prisma.vehicleDetails.findFirst({
      where: {
        AND: [accessibleBy(ability).VehicleDetails, { vehicle: { vehicleId } }],
      },
    });
  }

  async resolveCount(
    ability: PureAbility,
    vehicleId: bigint,
  ): Promise<VehicleCount> {
    const counts = await this.prisma.$transaction([
      this.prisma.serviceRequest.count({
        where: { AND: [accessibleBy(ability).ServiceRequest, { vehicleId }] },
      }),
      this.prisma.service.count({
        where: { AND: [accessibleBy(ability).Service, { vehicleId }] },
      }),
    ]);

    const [serviceRequests, services] = counts;

    return {
      serviceRequests,
      services,
    };
  }
}
