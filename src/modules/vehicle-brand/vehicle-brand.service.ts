import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateVehicleBrandInput } from './dto/index';

@Injectable()
export class VehicleBrandService {
  constructor(private databaseService: DatabaseService) {}

  async createVehicleBrand(data: CreateVehicleBrandInput) {
    return this.databaseService.vehicleBrand.create({
      data: {
        brandName: data.brandName,
      },
    });
  }

  async destroyVehicleBrand(id: string) {
    return this.databaseService.vehicleBrand.delete({
      where: { brandName: id },
    });
  }

  async findVehicleBrands() {
    return this.databaseService.vehicleBrand.findMany();
  }

  async findVehicleBrandById(id: string) {
    return this.databaseService.vehicleBrand.findUnique({
      where: { brandName: id },
    });
  }
}
