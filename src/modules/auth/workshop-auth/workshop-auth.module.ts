import { Module } from '@nestjs/common';
import { WorkshopAuthResolver } from './workshop-auth.resolver';
import { WorkshopAuthService } from './workshop-auth.service';
import { EmployeeModule } from 'src/modules/employee/employee.module';
import { EmployeeLocalStrategy } from '../employee-auth/strategies/employee-local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { WorkshopModule } from 'src/modules/workshop/workshop.module';
import { UserModule } from 'src/modules/user/user.module';
import { EmployeeJwtStrategy } from '../employee-auth/strategies/employee-jwt.strategy';
import { EmployeeJwtAuthGuard } from '../employee-auth/guards/employee-jwt-auth.guard';
import { EmployeeAuthModule } from '../employee-auth/employee-auth.module';

@Module({
  imports: [
    EmployeeModule,
    EmployeeAuthModule,
    WorkshopModule,
    JwtModule,
    PassportModule,
    UserModule,
  ],
  providers: [
    WorkshopAuthResolver,
    WorkshopAuthService,
    EmployeeLocalStrategy,
    EmployeeJwtStrategy,
    EmployeeJwtAuthGuard,
  ],
})
export class WorkshopAuthModule {}
