import { Module } from '@nestjs/common';
import { VehicleDetailsService } from './vehicle-details.service';
import { VehicleDetailsResolver } from './vehicle-details.resolver';

@Module({
  providers: [VehicleDetailsService, VehicleDetailsResolver],
  exports: [VehicleDetailsService],
})
export class VehicleDetailsModule {}
