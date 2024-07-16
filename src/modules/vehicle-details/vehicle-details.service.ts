import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateVehicleDetailsInput, UpdateVehicleDetailsInput } from './dto/index';

@Injectable()
export class VehicleDetailsService {
  constructor(private databaseService: DatabaseService) {}

  async createVehicleDetails(data: CreateVehicleDetailsInput) {
    return this.databaseService.vehicleDetails.create({
      data: {
        vehicleId: data.vehicleId,
        yearOfProduction: data.yearOfProduction,
        VIN: data.VIN,
        engineCapacity: data.engineCapacity,
        licensePlate: data.licensePlate,
        fuelType: data.fuelType,
        engineNo: data.engineNo,
        bodyColor: data.bodyColor,
        deletedAt: data.deletedAt,
      },
    });
  }

  async updateVehicleDetails(data: UpdateVehicleDetailsInput) {
    return this.databaseService.vehicleDetails.update({
      where: {
        vehicleId: data.vehicleId,
      },
      data: {
        yearOfProduction: data.yearOfProduction,
        VIN: data.VIN,
        engineCapacity: data.engineCapacity,
        licensePlate: data.licensePlate,
        fuelType: data.fuelType,
        engineNo: data.engineNo,
        bodyColor: data.bodyColor,
        deletedAt: data.deletedAt,
      },
    });
  }

  async findVehicleDetailsById(vehicleId: bigint) {
    return this.databaseService.vehicleDetails.findUnique({
      where: {
        vehicleId,
      },
    });
  }
}
