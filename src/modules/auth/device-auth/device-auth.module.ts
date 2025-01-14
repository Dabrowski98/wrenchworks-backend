import { Module } from '@nestjs/common';
import { DeviceAuthService } from './device-auth.service';
import { DeviceAuthResolver } from './device-auth.resolver';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/modules/user/user.module';
import { WorkshopModule } from 'src/modules/workshop/workshop.module';
import { EmployeeModule } from 'src/modules/employee/employee.module';
import { WorkshopDeviceOTPModule } from 'src/modules/workshop-device-otp/workshop-device-otp.module';
import { WorkshopDeviceModule } from 'src/modules/workshop-device/workshop-device.module';

@Module({
  imports: [
    JwtModule,
    PassportModule,
    UserModule,
    WorkshopModule,
    EmployeeModule,
    WorkshopDeviceOTPModule,
    WorkshopDeviceModule,
  ],
  providers: [DeviceAuthService, DeviceAuthResolver],
  exports: [DeviceAuthService, DeviceAuthResolver],
})
export class DeviceAuthModule {}
