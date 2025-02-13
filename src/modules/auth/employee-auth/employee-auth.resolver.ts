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
import { EmployeeJwtAuthGuard } from './guards/employee-jwt-auth.guard';
import { EmployeeLocalAuthGuard } from './guards/employee-local-auth.guard';
import { ChangePasswordInput } from '../common-dto';
import { EntityType } from 'src/common/enums/entity-type.enum';
import { Action, CheckAbilities } from 'src/modules/ability';
import { OrGuards } from 'src/common/decorators/guard-decorators/or-guards.decorator';
import { CurrentEntity } from 'src/common/decorators/jwt-decorators/current-entity.decorator';
import { CurrentEmployee } from 'src/common/decorators/jwt-decorators/current-employee.decorator';
import { UserJwtAuthGuard } from '../user-auth/guards/user-jwt-auth.guard';
import { JwtUserPayload } from '../user-auth/custom-dto/jwt-user-payload';
import { JwtEmployeePayload } from './custom-dto/jwt-employee-payload';
import { LoginEmployeeInput } from './custom-dto/login-employee.input';
import { LoginEmployeeResponse } from '../employee-auth/custom-dto/login-employee.response';
@Resolver()
export class EmployeeAuthResolver {
  constructor(private readonly employeeAuthService: EmployeeAuthService) {}

  // ADMIN, USER(Owner), EMPLOYEE
  @CheckAbilities({ action: Action.Create, subject: 'Employee' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Employee)
  createEmployee(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: CreateOneEmployeeArgs,
  ) {
    return this.employeeAuthService.createEmployee(currentEntity, args);
  }

  // USER
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

  // PUBLIC
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

  @Public()
  @Mutation(() => LoginEmployeeResponse)
  async refreshEmployeeTokens(
    @Args('refreshToken') refreshToken: string,
  ): Promise<LoginEmployeeResponse> {
    return this.employeeAuthService.refreshTokens(refreshToken);
  }

  // EMPLOYEE can logout
  @UseGuards(EmployeeJwtAuthGuard)
  @Mutation(() => Boolean)
  async logoutEmployee(
    @Args('refreshToken') refreshToken: string,
  ): Promise<boolean> {
    return this.employeeAuthService.revokeRefreshToken(refreshToken);
  }

  // ADMIN, USER(Owner), EMPLOYEE
  @CheckAbilities({ action: Action.Update, subject: 'Employee' })
  @OrGuards(EmployeeJwtAuthGuard, UserJwtAuthGuard)
  @Mutation(() => Boolean)
  logoutAnotherEmployee(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args('employeeId', { type: () => Scalars.GraphQLBigInt })
    employeeIdToLogout: bigint,
  ): Promise<boolean> {
    return this.employeeAuthService.logoutAnotherEmployee(
      currentEntity,
      employeeIdToLogout,
    );
  }

  @OrGuards(EmployeeJwtAuthGuard)
  @Mutation(() => Boolean)
  changeEmployeePassword(
    @CurrentEmployee() employee: JwtEmployeePayload,
    @Args('changeEmployeePasswordInput')
    changePasswordInput: ChangePasswordInput,
  ): Promise<boolean> {
    return this.employeeAuthService.changeEmployeePassword(
      employee.employeeId,
      changePasswordInput,
    );
  }
}
