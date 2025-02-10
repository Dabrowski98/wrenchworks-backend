import { Module } from '@nestjs/common';
import { UserAuthModule } from './user-auth/user-auth.module';
import { EmployeeAuthModule } from './employee-auth/employee-auth.module';
import { WorkshopAuthModule } from './workshop-auth/workshop-auth.module';
import { DeviceAuthModule } from './device-auth/device-auth.module';
import { AbilityModule } from '../ability/ability.module';

@Module({
  imports: [
    DeviceAuthModule,
    EmployeeAuthModule,
    UserAuthModule,
    WorkshopAuthModule,
  ],
  exports: [
    DeviceAuthModule,
    EmployeeAuthModule,
    UserAuthModule,
    WorkshopAuthModule,
  ],
})
export class AuthModule {}
