import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateVehicleModelInput, UpdateVehicleModelInput } from './dto/index';

@Injectable()
export class VehicleModelService {
  constructor(private databaseService: DatabaseService) {}

  async createVehicleModel(data: CreateVehicleModelInput) {
    return this.databaseService.vehicleModel.create({
      data: {
        modelName: data.modelName,
        brandName: data.brandName,
      },
    });
  }

  async destroyVehicleModel(id: { modelName: string, brandName: string }) {
    return this.databaseService.vehicleModel.delete({
      where: { modelName_brandName: id },
    });
  }

  async findVehicleModels() {
    return this.databaseService.vehicleModel.findMany();
  }

  async findVehicleModelByModelAndBrand(id: { modelName: string, brandName: string }) {
    return this.databaseService.vehicleModel.findUnique({
      where: { modelName_brandName: id },
    });
  }
}
