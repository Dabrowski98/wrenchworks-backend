import { Module } from '@nestjs/common';
import { VehicleDetailsResolver } from './vehicle-details.resolver';
import { VehicleDetailsService } from './vehicle-details.service';

@Module({
  providers: [VehicleDetailsResolver, VehicleDetailsService],
})
export class VehicleDetailsModule {}
