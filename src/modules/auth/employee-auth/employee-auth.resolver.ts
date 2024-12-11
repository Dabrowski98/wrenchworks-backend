import { Context, Resolver } from '@nestjs/graphql';
import { EmployeeAuthService } from './employee-auth.service';
import { RegisterEmployeeInput } from './dto/register-employee.input';
import { Employee } from '../../employee/dto';
import { Args, Mutation } from '@nestjs/graphql';
import { CurrentEmployeeID } from 'src/common/decorators/get-decorators/current-employee-id.decorator';
import { LoginEmployeeInput } from './dto/login-employee.input';
import { CurrentUserID } from 'src/common/decorators/get-decorators/current-user-id.decorator';
import { User } from 'src/modules/user/dto';
import { DeviceSerialNumber } from 'src/common/decorators/get-decorators/device-serial-number.decorator';
import { EntityJwtAuthGuard } from '../auth-common-guards';
import {
  EntityType,
  Type,
} from 'src/common/decorators/guard-decorators/entity-type.decorator';
import { ForbiddenException, UseGuards } from '@nestjs/common';
import { Public } from 'src/common/decorators/guard-decorators/public.decorator';
import { EmployeeLocalAuthGuard } from './guards/employee-local-auth.guard';
import { LoginEmployeeResponse } from './dto/login-employee.response';
import { ChangePasswordInput } from '../auth-common-dto';
@Resolver()
export class EmployeeAuthResolver {
  constructor(private readonly employeeAuthService: EmployeeAuthService) {}

  @EntityType(Type.EMPLOYEE)
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

  @EntityType(Type.USER)
  @UseGuards(EmployeeLocalAuthGuard)
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
      throw new ForbiddenException('Device serial number is required');

    return this.employeeAuthService.loginEmployeeByWorkshop(
      context.employee,
      deviceSerialNumber,
      loginEmployeeInput.workshopId,
    );
  }

  @EntityType(Type.EMPLOYEE)
  @Mutation(() => Boolean)
  async logoutEmployee(
    @Args('refreshToken') refreshToken: string,
  ): Promise<boolean> {
    return this.employeeAuthService.revokeRefreshToken(refreshToken);
  }

  @EntityType(Type.EMPLOYEE)
  @Mutation(() => Boolean)
  async logoutAnotherEmployee(
    @CurrentEmployeeID() employeeId: bigint,
    @Args('employeeId') employeeIdToLogout: bigint,
  ): Promise<boolean> {
    return this.employeeAuthService.logoutAnotherEmployee(employeeId, employeeIdToLogout);
  }

  @EntityType(Type.EMPLOYEE)
  @Mutation(() => Boolean)
  async registerNewDevice(
    @CurrentEmployeeID() registrantId: bigint,
    @Args('deviceSerialNumber') deviceSerialNumber: string,
  ): Promise<boolean> {
    //add some kind of guard that owner of workshop allows adding new device
    //check if device already exists
    return this.employeeAuthService.registerNewDevice(registrantId, deviceSerialNumber);
  }

  @EntityType(Type.EMPLOYEE)
  @Mutation(() => Boolean)
  async changeEmployeePassword(
    @CurrentEmployeeID() employeeId: bigint,
    @Args('changeEmployeePasswordInput') changePasswordInput: ChangePasswordInput,
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
