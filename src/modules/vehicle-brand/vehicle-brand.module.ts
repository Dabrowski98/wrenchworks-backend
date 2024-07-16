import { Module } from '@nestjs/common';
import { VehicleBrandService } from './vehicle-brand.service';
import { VehicleBrandResolver } from './vehicle-brand.resolver';

@Module({
  providers: [VehicleBrandResolver, VehicleBrandService],
})
export class VehicleBrandModule {}
