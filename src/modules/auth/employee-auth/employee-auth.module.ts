import { Module } from '@nestjs/common';
import { EmployeeAuthService } from './employee-auth.service';
import { EmployeeAuthResolver } from './employee-auth.resolver';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/modules/user/user.module';
import { EmployeeModule } from 'src/modules/employee/employee.module';
import { WorkshopModule } from 'src/modules/workshop/workshop.module';
import { WorkshopDeviceModule } from 'src/modules/workshop-device';

@Module({
  imports: [
    JwtModule,
    PassportModule,
    UserModule,
    EmployeeModule,
    WorkshopModule,
    WorkshopDeviceModule,
  ],
  providers: [EmployeeAuthService, EmployeeAuthResolver],
  exports: [EmployeeAuthService, EmployeeAuthResolver],
})
export class EmployeeAuthModule {}
