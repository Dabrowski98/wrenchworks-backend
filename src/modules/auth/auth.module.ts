import { Module } from '@nestjs/common';
import { UserAuthModule } from './user-auth/user-auth.module';
import { EmployeeAuthModule } from './employee-auth/employee-auth.module';

@Module({
  imports: [UserAuthModule, EmployeeAuthModule],
  exports: [UserAuthModule, EmployeeAuthModule],
})
export class AuthModule {}
