import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateVehicleInput, UpdateVehicleInput } from './dto/index';

@Injectable()
export class VehicleService {
  constructor(private databaseService: DatabaseService) {}

  async createVehicle(data: CreateVehicleInput) {
    return this.databaseService.vehicle.create({
      data: {
        personId: data.personId,
        brandName: data.brandName,
        modelId: data.modelId,
        deletedAt: data.deletedAt,
      },
    });
  }

  async updateVehicle(data: UpdateVehicleInput) {
    return this.databaseService.vehicle.update({
      where: {
        vehicleId: data.vehicleId,
      },
      data: {
        personId: data.personId,
        brandName: data.brandName,
        modelId: data.modelId,
        deletedAt: data.deletedAt,
      },
    });
  }

  async findAllVehicles() {
    return this.databaseService.vehicle.findMany();
  }

  async findVehicleById(vehicleId: bigint) {
    return this.databaseService.vehicle.findUnique({
      where: {
        vehicleId,
      },
    });
  }

  async deleteVehicle(vehicleId: bigint) {
    return this.databaseService.vehicle.delete({
      where: {
        vehicleId,
      },
    });
  }
}
