import { Module } from '@nestjs/common';
import { WorkshopAuthResolver as WorkshopAuthResolver } from './workshop-auth.resolver';
import { WorkshopAuthService as WorkshopAuthService } from './workshop-auth.service';
import { EmployeeModule } from 'src/modules/employee/employee.module';
import { EmployeeLocalStrategy } from './strategies/employee-local.strategy';
import { PassportModule } from '@nestjs/passport';
import { EntityJwtStrategy } from '../auth-common-strategies/entity-jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { WorkshopModule } from 'src/modules/workshop/workshop.module';

@Module({
  imports: [EmployeeModule, WorkshopModule, JwtModule, PassportModule],
  providers: [
    WorkshopAuthResolver,
    WorkshopAuthService,
    EmployeeLocalStrategy,
    EntityJwtStrategy,
  ],
})
export class WorkshopAuthModule {}
