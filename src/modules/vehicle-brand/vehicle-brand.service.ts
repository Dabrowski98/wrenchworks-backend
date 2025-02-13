import { PrismaService } from 'src/database/prisma.service';
import {
  BadRequestError,
  RecordNotFoundError,
} from 'src/common/custom-errors/errors.config';
import { Injectable } from '@nestjs/common';
import {
  CreateOneVehicleBrandArgs,
  DeleteOneVehicleBrandArgs,
  FindManyVehicleBrandArgs,
  FindUniqueVehicleBrandArgs,
  UpdateOneVehicleBrandArgs,
  VehicleBrand,
  VehicleBrandCount,
} from './dto';
import { VehicleModel } from '../vehicle-model/dto';
import { accessibleBy } from '@casl/prisma';
import { PureAbility } from '@casl/ability';

@Injectable()
export class VehicleBrandService {
  constructor(private readonly prisma: PrismaService) {}

  async create(args: CreateOneVehicleBrandArgs): Promise<VehicleBrand> {
    return this.prisma.vehicleBrand.create(args);
  }

  async findOne(args: FindUniqueVehicleBrandArgs): Promise<VehicleBrand> {
    const vehicleBrand = await this.prisma.vehicleBrand.findUnique(args);
    if (!vehicleBrand) throw new RecordNotFoundError(VehicleBrand);
    return vehicleBrand;
  }

  async findMany(args?: FindManyVehicleBrandArgs): Promise<VehicleBrand[]> {
    return this.prisma.vehicleBrand.findMany(args || {});
  }

  async update(args: UpdateOneVehicleBrandArgs): Promise<VehicleBrand> {
    return this.prisma.vehicleBrand.update({
      data: { ...args.data },
      where: args.where,
    });
  }

  async delete(args: DeleteOneVehicleBrandArgs): Promise<boolean> {
    return await this.prisma.vehicleBrand
      .delete({
        where: args.where,
      })
      .then(() => true)
      .catch(() => false);
  }

  // RESOLVE METHODS

  async vehicleModels(
    ability: PureAbility,
    brandName: string,
  ): Promise<VehicleModel[]> {
    return await this.prisma.vehicleModel.findMany({
      where: {
        AND: [
          accessibleBy(ability).VehicleModel,
          { vehicleBrand: { brandName } },
        ],
      },
    });
  }

  async resolveCount(
    ability: PureAbility,
    brandName: string,
  ): Promise<VehicleBrandCount> {
    const [models] = await this.prisma.$transaction([
      this.prisma.vehicleModel.count({
        where: {
          AND: [
            accessibleBy(ability).VehicleModel,
            { vehicleBrand: { brandName } },
          ],
        },
      }),
    ]);

    return {
      vehicleModels: models,
    };
  }
}
