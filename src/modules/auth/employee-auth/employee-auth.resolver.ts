import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { CurrentUserID } from 'src/common/decorators/jwt-decorators/current-user-id.decorator';
import { Employee } from 'src/modules/employee/dto';
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
@Resolver()
export class EmployeeAuthResolver {
  constructor(private readonly employeeAuthService: EmployeeAuthService) {}

  @UseGuards(EmployeeJwtAuthGuard)
  @Mutation(() => Employee)
  async registerEmployee(
    @Args('registerEmployeeInput') registerEmployeeInput: RegisterEmployeeInput,
    @CurrentEmployeeID() registrantEmployeeId: bigint,
  ) {
    return this.employeeAuthService.registerEmployee(
      registerEmployeeInput,
      registrantEmployeeId,
    );
  }

  @UseGuards(UserJwtAuthGuard, EmployeeLocalAuthGuard)
  @Mutation(() => LoginEmployeeResponse)
  async loginEmployeeByUser(
    @Args('loginEmployeeInput') loginEmployeeInput: LoginEmployeeInput,
    @CurrentUserID() userId: bigint,
    @Context() context: any,
  ): Promise<LoginEmployeeResponse> {
    return this.employeeAuthService.loginEmployeeByUser(
      context.employee,
      userId,
    );
  }

  @Public()
  @UseGuards(EmployeeLocalAuthGuard)
  @Mutation(() => LoginEmployeeResponse)
  async loginEmployeeByWorkshop(
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

  @UseGuards(EmployeeJwtAuthGuard)
  @Mutation(() => Boolean)
  async logoutEmployee(
    @Args('refreshToken') refreshToken: string,
  ): Promise<boolean> {
    try {
      return this.employeeAuthService.revokeRefreshToken(refreshToken);
    } catch {
      return false;
    }
  }

  //only szef can logout other peepos
  @UseGuards(EmployeeJwtAuthGuard)
  @Mutation(() => Boolean)
  async logoutAnotherEmployee(
    @CurrentEmployeeID() employeeId: bigint,
    @Args('employeeId', { type: () => Scalars.GraphQLBigInt })
    employeeIdToLogout: bigint,
  ): Promise<boolean> {
    try {
      await this.employeeAuthService.logoutAnotherEmployee(
        employeeId,
        employeeIdToLogout,
      );
      return true;
    } catch {
      return false;
    }
  }

  //TODO: refactor
  @UseGuards(EmployeeJwtAuthGuard)
  @Mutation(() => Boolean)
  async deleteEmployee(
    @CurrentEmployeeID() employeeId: bigint,
    @Args('employeeId', { type: () => Scalars.GraphQLBigInt })
    employeeToDeleteId: bigint,
  ): Promise<boolean> {
    return this.employeeAuthService.deleteEmployee(
      employeeId,
      employeeToDeleteId,
    );
  }

  @UseGuards(EmployeeJwtAuthGuard)
  @Mutation(() => Boolean)
  async changeEmployeePassword(
    @CurrentEmployeeID() employeeId: bigint,
    @Args('changeEmployeePasswordInput')
    changePasswordInput: ChangePasswordInput,
  ): Promise<boolean> {
    try {
      return this.employeeAuthService.changeEmployeePassword(
        employeeId,
        changePasswordInput,
      );
    } catch {
      return false;
    }
  }
}
