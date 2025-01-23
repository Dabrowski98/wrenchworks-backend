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

@Injectable()
export class VehicleDetailsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(args: CreateOneVehicleDetailsArgs): Promise<VehicleDetails> {
    return this.prisma.vehicleDetails.create({
      data: {
        ...args.data,
      },
    });
  }

  async findOne(args: FindUniqueVehicleDetailsArgs): Promise<VehicleDetails> {
    const vehicleDetails = await this.prisma.vehicleDetails.findUnique(args);
    if (!vehicleDetails) throw new RecordNotFoundError(VehicleDetails);
    return vehicleDetails;
  }

  async findMany(args: FindManyVehicleDetailsArgs): Promise<VehicleDetails[]> {
    return this.prisma.vehicleDetails.findMany(args);
  }

  async update(args: UpdateOneVehicleDetailsArgs): Promise<VehicleDetails> {
    return this.prisma.vehicleDetails.update({
      data: { ...args.data },
      where: args.where,
    });
  }

  async delete(args: DeleteOneVehicleDetailsArgs): Promise<boolean> {
    return await this.prisma.vehicleDetails
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
