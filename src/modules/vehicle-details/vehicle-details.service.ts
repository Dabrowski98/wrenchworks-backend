import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import {
  CreateOneVehicleDetailsArgs,
  DeleteOneVehicleDetailsArgs,
  FindManyVehicleDetailsArgs,
  FindUniqueVehicleDetailsArgs,
  UpdateOneVehicleDetailsArgs,
  VehicleDetails,
} from './dto';
import { Vehicle } from '../vehicle/dto';
import { RecordNotFoundError } from 'src/common/custom-errors/errors.config';
import { ForbiddenError } from '@casl/ability';
import { subject } from '@casl/ability';
import { AbilityFactory, Action } from '../ability';
import { JwtUserPayload } from '../auth/user-auth/custom-dto/jwt-user-payload';
import { JwtEmployeePayload } from '../auth/employee-auth/custom-dto/jwt-employee-payload';
import { accessibleBy } from '@casl/prisma';

@Injectable()
export class VehicleDetailsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly abilityFactory: AbilityFactory,
  ) {}

  async create(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args: CreateOneVehicleDetailsArgs,
  ): Promise<VehicleDetails> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    const vehicle = await this.prisma.vehicle.findUnique({
      where: args.data.vehicle.connect,
      include: { customer: { select: { workshopId: true, userId: true } } },
    });

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Create,
      subject('VehicleDetails', {
        vehicle: {
          userId: vehicle.userId,
          customer: { workshopId: vehicle.customer.workshopId },
        },
      } as any),
    );

    return this.prisma.vehicleDetails.create(args);
  }

  async findOne(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args: FindUniqueVehicleDetailsArgs,
  ): Promise<VehicleDetails> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    const vehicleDetails = await this.prisma.vehicleDetails.findFirst({
      where: { AND: [accessibleBy(ability).VehicleDetails, args.where] },
    });
    if (!vehicleDetails) throw new RecordNotFoundError(VehicleDetails);
    return vehicleDetails;
  }

  async findMany(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args?: FindManyVehicleDetailsArgs,
  ): Promise<VehicleDetails[]> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    return this.prisma.vehicleDetails.findMany({
      where: {
        AND: [accessibleBy(ability).VehicleDetails, args?.where || {}],
      },
      ...args,
    });
  }

  async update(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args: UpdateOneVehicleDetailsArgs,
  ): Promise<VehicleDetails> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);

    const vehicleDetails = await this.prisma.vehicleDetails.findUnique({
      where: args.where,
      include: {
        vehicle: {
          include: { customer: { select: { workshopId: true, userId: true } } },
        },
      },
    });

    if (!vehicleDetails) throw new RecordNotFoundError(VehicleDetails);

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Update,
      subject('VehicleDetails', vehicleDetails),
    );

    return this.prisma.vehicleDetails.update(args);
  }

  async delete(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args: DeleteOneVehicleDetailsArgs,
  ): Promise<boolean> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);

    const vehicleDetails = await this.prisma.vehicleDetails.findUnique({
      where: args.where,
      include: {
        vehicle: {
          include: { customer: { select: { workshopId: true, userId: true } } },
        },
      },
    });

    if (!vehicleDetails) throw new RecordNotFoundError(VehicleDetails);

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Delete,
      subject('VehicleDetails', vehicleDetails),
    );

    return this.prisma.vehicleDetails
      .delete({
        where: args.where,
      })
      .then(() => true)
      .catch(() => false);
  }

  // RESOLVE METHODS

  async vehicle(vehicleDetailsId: bigint): Promise<Vehicle> {
    return (
      await this.prisma.vehicleDetails.findUnique({
        where: { vehicleDetailsId },
        include: { vehicle: true },
      })
    ).vehicle;
  }
}
