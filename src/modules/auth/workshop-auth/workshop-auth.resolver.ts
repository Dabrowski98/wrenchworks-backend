import { Context, Resolver } from '@nestjs/graphql';
import { WorkshopAuthService } from './workshop-auth.service';
import { RegisterEmployeeInput } from './dto/register-employee.input';
import { Employee } from '../../employee/dto';
import { Args, Mutation } from '@nestjs/graphql';
import { CurrentUserID } from 'src/common/decorators/get-decorators/current-user-id.decorator';
import { LoginEmployeeInput } from './dto/login-employee.input';
import { User } from 'src/modules/user/dto';
import { DeviceSerialNumber } from 'src/common/decorators/get-decorators/device-serial-number.decorator';
import {
  EntityType,
  Type,
} from 'src/common/decorators/guard-decorators/entity-type.decorator';
import {
  BadRequestException,
  ForbiddenException,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import {
  IS_PUBLIC_KEY,
  Public,
} from 'src/common/decorators/guard-decorators/public.decorator';
import { EmployeeLocalAuthGuard } from './guards/employee-local-auth.guard';
import { LoginEmployeeResponse } from './dto/login-employee.response';
import { ChangePasswordInput } from '../auth-common-dto';
import { RequestDeviceRegistrationInput } from './dto/request-device-registration.input';
import { WorkshopDevice } from 'src/modules/workshop-device/dto';
import { AcceptWorkshopDeviceInput } from './dto/accept-workshop-device.input';
import * as Scalars from 'graphql-scalars'
import { Workshop } from 'src/modules/workshop/dto';
import { RegisterWorkshopInput } from './dto/register-workshop.input';
import { RegisterWorkshopResponse } from './dto/register-workshop.response';
import { UserJwtAuthGuard } from '../user-auth/guards/user-jwt-auth.guard';
import { EmployeeJwtAuthGuard } from './guards/user-jwt-auth.guard';
import { CurrentEmployeeID } from 'src/common/decorators/get-decorators/current-employee-id.decorator';


//TODO: ensure permissions
//TODO: split workshop auth resolver into smaller resolvers.
@Resolver()
export class WorkshopAuthResolver {
  constructor(private readonly workshopAuthService: WorkshopAuthService) {}

  @UseGuards(UserJwtAuthGuard)
  @Mutation(() => RegisterWorkshopResponse)
  async registerWorkshop(
    @Args('registerWorkshopInput') registerWorkshopInput: RegisterWorkshopInput,
    @CurrentUserID() userId: bigint,
  ) {
    return this.workshopAuthService.registerWorkshop(
      registerWorkshopInput,
      userId,
    );
  }


  // permitted employee can register new employee
  @UseGuards(EmployeeJwtAuthGuard)
  @Mutation(() => Employee)
  async registerEmployee(
    @Args('registerEmployeeInput') registerEmployeeInput: RegisterEmployeeInput,
    @CurrentEmployeeID() registrantEmployeeId: bigint,
  ) {
    return this.workshopAuthService.registerEmployee(
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
    return this.workshopAuthService.loginEmployeeByUser(
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

    return this.workshopAuthService.loginEmployeeByWorkshop(
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
      return this.workshopAuthService.revokeRefreshToken(refreshToken);
    } catch {
      return false;
    }
  }

  //only szef can logout other peepos
  @UseGuards(EmployeeJwtAuthGuard)
  @Mutation(() => Boolean)
  async logoutAnotherEmployee(
    @CurrentEmployeeID() employeeId: bigint,
    @Args('employeeId', { type: () => Scalars.GraphQLBigInt }) employeeIdToLogout: bigint,
  ): Promise<boolean> {
    try {
      await this.workshopAuthService.logoutAnotherEmployee(
        employeeId,
        employeeIdToLogout,
      );
      return true;
    } catch {
      return false;
    }
  }

  // //TODO: refactor
  // @EntityType(Type.EMPLOYEE)
  // @Mutation(() => Boolean)
  // async deleteEmployee(
  //   @Args('deleteEmployeeInput') deleteEmployeeInput: DeleteEmployeeInput,
  //   @CurrentEmployeeID() employeeId: bigint,
  // ): Promise<boolean> {
  //   return this.workshopAuthService.deleteEmployee(
  //     deleteEmployeeInput,
  //     employeeId,
  //   );
  // }

  @UseGuards(EmployeeJwtAuthGuard)
  @Mutation(() => String)
  async generateDeviceOTP(
    @CurrentEmployeeID() employeeId: bigint,
  ): Promise<string> {
    return this.workshopAuthService.generateDeviceOTP(employeeId);
  }

  //TODO: limit number of requests
  @Public()
  @Mutation(() => Boolean)
  async requestDeviceRegistration(
    @Args('requestDeviceRegistrationInput')
    requestDeviceRegistrationInput: RequestDeviceRegistrationInput,
  ): Promise<boolean> {
    const device = await this.workshopAuthService.requestDeviceRegistration(
      requestDeviceRegistrationInput,
    );
    return !!device;
  }

  @UseGuards(EmployeeJwtAuthGuard)
  @Mutation(() => WorkshopDevice)
  async acceptDeviceRegistration(
    @Args('acceptWorkshopDeviceInput')
    acceptWorkshopDeviceInput: AcceptWorkshopDeviceInput,
    @CurrentEmployeeID() employeeId: bigint,
  ): Promise<WorkshopDevice> {
    return this.workshopAuthService.acceptDeviceRegistration(
      acceptWorkshopDeviceInput,
      employeeId,
    );
  }

  //TODO: refactor
  @UseGuards(EmployeeJwtAuthGuard)
  @Mutation(() => Boolean)
  async removeDevice (
    @Args('deviceId', { type: () => Scalars.GraphQLBigInt }) deviceId: bigint,
  ): Promise<WorkshopDevice> {
    return this.workshopAuthService.removeDevice(
      deviceId,
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
      return this.workshopAuthService.changeEmployeePassword(
        employeeId,
        changePasswordInput,
      );
    } catch {
      return false;
    }
  }
}
