import { Module } from '@nestjs/common';
import { EmployeeAuthResolver } from './employee-auth.resolver';
import { EmployeeAuthService } from './employee-auth.service';
import { EmployeeModule } from 'src/modules/employee/employee.module';
import { EmployeeLocalStrategy } from './strategies/employee-local.strategy';
import { PassportModule } from '@nestjs/passport';
import { EntityJwtStrategy } from '../auth-common-strategies/entity-jwt.strategy';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [EmployeeModule, JwtModule, PassportModule],
  providers: [EmployeeAuthResolver, EmployeeAuthService, EmployeeLocalStrategy, EntityJwtStrategy],
})
export class EmployeeAuthModule {}
