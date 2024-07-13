import { Module } from '@nestjs/common';
import { VehicleModelService } from './vehicle-model.service';
import { VehicleModelResolver } from './vehicle-model.resolver';

@Module({
  providers: [VehicleModelResolver, VehicleModelService],
})
export class VehicleModelModule {}
