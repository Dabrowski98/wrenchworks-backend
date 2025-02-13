import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import {
  CreateOneVehicleModelArgs,
  DeleteOneVehicleModelArgs,
  FindManyVehicleModelArgs,
  FindUniqueVehicleModelArgs,
  UpdateOneVehicleModelArgs,
  VehicleModel,
  VehicleModelCount,
} from './dto';
import { Vehicle } from '../vehicle/dto';
import { RecordNotFoundError } from 'src/common/custom-errors/errors.config';
import { VehicleBrand } from '../vehicle-brand/dto';
import { accessibleBy } from '@casl/prisma';
import { PureAbility } from '@casl/ability';

@Injectable()
export class VehicleModelService {
  constructor(private readonly prisma: PrismaService) {}

  async create(args: CreateOneVehicleModelArgs): Promise<VehicleModel> {
    return this.prisma.vehicleModel.create(args);
  }

  async findOne(args: FindUniqueVehicleModelArgs): Promise<VehicleModel> {
    const vehicleModel = await this.prisma.vehicleModel.findUnique(args);
    if (!vehicleModel) throw new RecordNotFoundError(VehicleModel);
    return vehicleModel;
  }

  async findMany(args?: FindManyVehicleModelArgs): Promise<VehicleModel[]> {
    return this.prisma.vehicleModel.findMany(args || {});
  }

  async update(args: UpdateOneVehicleModelArgs): Promise<VehicleModel> {
    return this.prisma.vehicleModel.update({
      data: { ...args.data },
      where: args.where,
    });
  }

  async delete(args: DeleteOneVehicleModelArgs): Promise<boolean> {
    return await this.prisma.vehicleModel
      .delete({
        where: args.where,
      })
      .then(() => true)
      .catch(() => false);
  }

  // RESOLVE METHODS

  async vehicleBrand(
    ability: PureAbility,
    modelId: bigint,
  ): Promise<VehicleBrand> {
    return await this.prisma.vehicleBrand.findFirst({
      where: {
        AND: [
          accessibleBy(ability).VehicleBrand,
          { vehicleModels: { some: { modelId } } },
        ],
      },
    });
  }

  async vehicles(ability: PureAbility, modelId: bigint): Promise<Vehicle[]> {
    return await this.prisma.vehicle.findMany({
      where: {
        AND: [accessibleBy(ability).Vehicle, { vehicleModel: { modelId } }],
      },
    });
  }

  async resolveCount(
    ability: PureAbility,
    modelId: bigint,
  ): Promise<VehicleModelCount> {
    const [vehicles] = await this.prisma.$transaction([
      this.prisma.vehicle.count({
        where: {
          AND: [accessibleBy(ability).Vehicle, { vehicleModel: { modelId } }],
        },
      }),
    ]);

    return {
      vehicles,
    };
  }
}
