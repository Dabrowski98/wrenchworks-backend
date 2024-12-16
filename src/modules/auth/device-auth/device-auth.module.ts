import { Module } from '@nestjs/common';
import { DeviceAuthService } from './device-auth.service';
import { DeviceAuthResolver } from './device-auth.resolver';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/modules/user/user.module';
import { WorkshopModule } from 'src/modules/workshop/workshop.module';
import { EmployeeModule } from 'src/modules/employee/employee.module';

@Module({
  imports: [
    JwtModule,
    PassportModule,
    UserModule,
    WorkshopModule,
    EmployeeModule,
  ],
  providers: [DeviceAuthService, DeviceAuthResolver],
  exports: [DeviceAuthService, DeviceAuthResolver],
})
export class DeviceAuthModule {}
