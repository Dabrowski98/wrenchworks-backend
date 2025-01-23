import { Module } from '@nestjs/common';
import { VehicleModelService } from './vehicle-model.service';
import { VehicleModelResolver } from './vehicle-model.resolver';

@Module({
  providers: [VehicleModelService, VehicleModelResolver],
  exports: [VehicleModelService],
})
export class VehicleModelModule {}
