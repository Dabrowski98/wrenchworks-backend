import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { CurrentUserID } from 'src/common/decorators/jwt-decorators/current-user-id.decorator';
import {
  CreateOneEmployeeArgs,
  Employee,
  EmployeeCreateInput,
} from 'src/modules/employee/dto';
import { BadRequestException, UseGuards } from '@nestjs/common';
import { CurrentEmployeeID } from 'src/common/decorators/jwt-decorators/current-employee-id.decorator';
import { DeviceSerialNumber } from 'src/common/decorators/headers-decorators/device-serial-number.decorator';
import { Public } from 'src/common/decorators/guard-decorators/public.decorator';
import { EmployeeAuthService } from './employee-auth.service';
import { RegisterEmployeeInput } from './dto/register-employee.input';
import { EmployeeJwtAuthGuard } from './guards/employee-jwt-auth.guard';
import { EmployeeLocalAuthGuard } from './guards/employee-local-auth.guard';
import { LoginEmployeeResponse } from './dto/login-employee.response';
import { UserJwtAuthGuard } from '../user-auth/guards/user-jwt-auth.guard';
import { LoginEmployeeInput } from './dto/login-employee.input';
import { ChangePasswordInput } from '../common-dto';
import { EntityType } from 'src/common/enums/entity-type.enum';
import { Action, CheckAbilities } from 'src/modules/ability';
import { OrGuards } from 'src/common/decorators/guard-decorators/or-guards.decorator';
import { JwtUserPayload } from '../user-auth/dto';
import { CurrentEntity } from 'src/common/decorators/jwt-decorators/current-entity.decorator';
import { JwtEmployeePayload } from './dto';
import { CurrentEmployee } from 'src/common/decorators/jwt-decorators/current-employee.decorator';
@Resolver()
export class EmployeeAuthResolver {
  constructor(private readonly employeeAuthService: EmployeeAuthService) {}

  // USER(Owner) can create employee
  // EMPLOYEE with right permissions can create employee
  @CheckAbilities({ action: Action.Create, subject: 'Employee' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Employee)
  createEmployee(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: CreateOneEmployeeArgs,
  ) {
    return this.employeeAuthService.createEmployee(currentEntity, args);
  }

  // USER(connected to employee) can login
  @UseGuards(UserJwtAuthGuard, EmployeeLocalAuthGuard)
  @Mutation(() => LoginEmployeeResponse)
  loginEmployeeFromUser(
    @Args('loginEmployeeInput') loginEmployeeInput: LoginEmployeeInput,
    @CurrentUserID() userId: bigint,
    @Context() context: any,
  ): Promise<LoginEmployeeResponse> {
    return this.employeeAuthService.loginEmployeeByUser(
      context.employee,
      userId,
    );
  }

  // ANYONE can login from registered device
  @Public()
  @UseGuards(EmployeeLocalAuthGuard)
  @Mutation(() => LoginEmployeeResponse)
  loginEmployeeFromDevice(
    @Args('loginEmployeeInput') loginEmployeeInput: LoginEmployeeInput,
    @DeviceSerialNumber() deviceSerialNumber: string,
    @Context() context: any,
  ): Promise<LoginEmployeeResponse> {
    if (!deviceSerialNumber)
      throw new BadRequestException('Device serial number is required');

    return this.employeeAuthService.loginEmployeeByWorkshop(
      context.employee,
      deviceSerialNumber,
      loginEmployeeInput.workshopId,
    );
  }

  // EMPLOYEE can logout
  @UseGuards(EmployeeJwtAuthGuard)
  @Mutation(() => Boolean)
  logoutEmployee(@Args('refreshToken') refreshToken: string): Promise<boolean> {
    return this.employeeAuthService
      .revokeRefreshToken(refreshToken)
      .then(() => true)
      .catch(() => false);
  }

  // USER(Owner) can logout another employee
  // EMPLOYEE(Owner) can logout another employee
  @CheckAbilities({ action: Action.Update, subject: 'Employee' })
  @OrGuards(EmployeeJwtAuthGuard, UserJwtAuthGuard)
  @Mutation(() => Boolean)
  logoutAnotherEmployee(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args('employeeId', { type: () => Scalars.GraphQLBigInt })
    employeeIdToLogout: bigint,
  ): Promise<boolean> {
    return this.employeeAuthService
      .logoutAnotherEmployee(currentEntity, employeeIdToLogout)
      .then(() => true)
      .catch(() => false);
  }

  // EMPLOYEE can change password
  @UseGuards(EmployeeJwtAuthGuard)
  @Mutation(() => Boolean)
  changeEmployeePassword(
    @CurrentEmployee() employee: JwtEmployeePayload,
    @Args('changeEmployeePasswordInput')
    changePasswordInput: ChangePasswordInput,
  ): Promise<boolean> {
    return this.employeeAuthService
      .changeEmployeePassword(employee.employeeId, changePasswordInput)
      .then(() => true)
      .catch(() => false);
  }
}
