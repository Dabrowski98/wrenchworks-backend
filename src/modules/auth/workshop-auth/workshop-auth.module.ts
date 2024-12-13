import { Module } from '@nestjs/common';
import { WorkshopAuthResolver as WorkshopAuthResolver } from './workshop-auth.resolver';
import { WorkshopAuthService as WorkshopAuthService } from './workshop-auth.service';
import { EmployeeModule } from 'src/modules/employee/employee.module';
import { EmployeeLocalStrategy } from './strategies/employee-local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { WorkshopModule } from 'src/modules/workshop/workshop.module';
import { UserModule } from 'src/modules/user/user.module';
import { EmployeeJwtStrategy } from './strategies/employee-jwt.strategy';
import { EmployeeJwtAuthGuard } from './guards/user-jwt-auth.guard';

@Module({
  imports: [EmployeeModule, WorkshopModule, JwtModule, PassportModule, UserModule],
  providers: [
    WorkshopAuthResolver,
    WorkshopAuthService,
    EmployeeLocalStrategy,
    EmployeeJwtStrategy,
    EmployeeJwtAuthGuard,
  ],
})
export class WorkshopAuthModule {}
