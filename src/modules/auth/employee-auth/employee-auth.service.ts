import {
  BadRequestException,
  ForbiddenException,
  UnauthorizedException,
} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import {
  CreateOneEmployeeArgs,
  DeleteOneEmployeeArgs,
  Employee,
  EmployeeCreateInput,
  EmployeeWhereUniqueInput,
  FindUniqueEmployeeArgs,
} from 'src/modules/employee/dto';
import { JwtService } from '@nestjs/jwt';
import { v4 as uuidv4 } from 'uuid';
import { EmployeeService } from 'src/modules/employee/employee.service';
import { RegisterEmployeeInput } from './dto/register-employee.input';
import { LoginEmployeeResponse } from './dto/login-employee.response';
import * as bcrypt from 'bcrypt';
import { LoggedInBy } from './enums/loggedInBy.enum';
import { ChangePasswordInput } from '../common-dto';
import { JwtEmployeePayload } from './dto/jwt-employee-payload';
import { EntityType } from 'src/common/enums/entity-type.enum';
import { WorkshopDeviceService } from 'src/modules/workshop-device';
import { JwtUserPayload } from '../user-auth/dto';
import { UserService } from 'src/modules/user/user.service';
import { User } from 'src/modules/user/dto';
import { isEmployeePayload, isUserPayload } from 'src/common/utils/type-guards';
import { ForbiddenError, subject } from '@casl/ability';
import { Action } from 'src/modules/ability';
import { AbilityFactory } from 'src/modules/ability/ability.factory';
import { PrismaService } from 'src/database/prisma.service';
@Injectable()
export class EmployeeAuthService {
  constructor(
    private readonly employeeService: EmployeeService,
    private readonly userService: UserService,
    private readonly workshopDeviceService: WorkshopDeviceService,
    private readonly jwtService: JwtService,
    private readonly userAbilityFactory: AbilityFactory,
    private readonly prisma: PrismaService,
  ) {}

  async createEmployee(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args: CreateOneEmployeeArgs,
  ): Promise<Employee> {
    if (!currentEntity) {
      throw new ForbiddenException('You have to be logged in.');
    }
    let data = args.data;

    const hashedPassword = await bcrypt.hash(data.password, 10);
    data = { ...data, password: hashedPassword };

    const workshopId = data.workshop.connect.workshopId;
    const ability = await this.userAbilityFactory.defineAbility(currentEntity);
    ForbiddenError.from(ability).throwUnlessCan(
      Action.Create,
      subject('Employee', { workshopId } as any),
    );

    return this.employeeService.create(currentEntity, args);
  }

  async loginEmployeeByUser(
    employee: Employee,
    userId: bigint,
  ): Promise<LoginEmployeeResponse> {
    if (userId != employee.userId)
      throw new ForbiddenException(
        'That employee record is not associated with that user',
      );

    const { accessToken, refreshToken } = await this.generateTokens(
      employee,
      LoggedInBy.USER,
    );

    await this.employeeService.updateRefreshToken(
      employee.employeeId,
      refreshToken,
    );

    return { accessToken, refreshToken, employee };
  }

  async loginEmployeeByWorkshop(
    employee: Employee,
    deviceSerialNumber: string,
    workshopId: bigint,
  ): Promise<LoginEmployeeResponse> {
    const device = await this.workshopDeviceService.findOne({
      where: {
        workshopId_serialNumber: {
          workshopId,
          serialNumber: deviceSerialNumber,
        },
      },
    });

    if (!device) throw new ForbiddenException('Device not found');

    if (!device.acceptedBy)
      throw new ForbiddenException(
        'In order to login on this device, permitted workshop employee must accept it first',
      );

    const { accessToken, refreshToken } = await this.generateTokens(
      employee,
      LoggedInBy.WORKSHOP,
    );

    await this.employeeService.updateRefreshToken(
      employee.employeeId,
      refreshToken,
    );

    return { accessToken, refreshToken, employee };
  }

  async revokeRefreshToken(
    refreshToken: string,
  ) {
    const decodedRefreshToken = await this.jwtService.verify(refreshToken, {
      secret: process.env.EMPLOYEE_REFRESH_SECRET,
    });

    if (!decodedRefreshToken) return false;

    const employee = await this.prisma.employee.findUnique({
      where: { employeeId: decodedRefreshToken.employeeId },
    });

    if (!employee.refreshToken) return false;

    const result = await this.employeeService.updateRefreshToken(
      employee.employeeId,
      null,
    );

    return result ? true : false;
  }

  async refreshTokens(currentRT: string): Promise<LoginEmployeeResponse> {
    const decodedRefreshToken = await this.jwtService.verify(currentRT, {
      secret: process.env.EMPLOYEE_REFRESH_SECRET,
    });

    if (!decodedRefreshToken)
      throw new UnauthorizedException('Invalid refresh token');

    const employee = await this.prisma.employee.findUnique({
      where: { employeeId: decodedRefreshToken.employeeId },
    });

    if (!employee) throw new UnauthorizedException('Employee not found');

    const { accessToken, refreshToken } = await this.generateTokens(
      employee,
      LoggedInBy.USER,
    );
    await this.revokeRefreshToken(currentRT);
    await this.employeeService.updateRefreshToken(
      employee.employeeId,
      refreshToken,
    );

    return { accessToken, refreshToken, employee };
  }

  async changeEmployeePassword(
    employeeId: bigint,
    changePasswordInput: ChangePasswordInput,
  ) {
    const employee = await this.prisma.employee.findUnique({
      where: { employeeId },
    });

    if (!employee) throw new UnauthorizedException('Employee not found');

    const isPasswordValid = await bcrypt.compare(
      changePasswordInput.oldPassword,
      employee.password,
    );

    if (!isPasswordValid)
      throw new UnauthorizedException('Invalid old password');

    if (changePasswordInput.oldPassword === changePasswordInput.newPassword)
      throw new BadRequestException(
        'New password cannot be the same as the old password',
      );

    const hashedPassword = await bcrypt.hash(
      changePasswordInput.newPassword,
      10,
    );

    const result = await this.prisma.employee.update({
      where: { employeeId },
      data: { password: hashedPassword },
    });

    return result ? true : false;
  }

  async logoutAnotherEmployee(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    employeeIdToLogout: bigint,
  ) {
    let employee: Employee;
    let user: User;

    if (isEmployeePayload(currentEntity)) {
      employee = await this.prisma.employee.findUnique({
        where: { employeeId: currentEntity.employeeId },
      });
    } else if (isUserPayload(currentEntity)) {
      user = await this.userService.findOne({
        where: { userId: currentEntity.userId },
      });
    }

    if (!employee && !user) throw new UnauthorizedException('Entity not found');

    const employeeToLogout: Employee = await this.prisma.employee.findUnique({
      where: { employeeId: employeeIdToLogout },
    });

    const ability = await this.userAbilityFactory.defineAbility(currentEntity);
    ForbiddenError.from(ability).throwUnlessCan(
      Action.Update,
      subject('Employee', { ...employeeToLogout, password: undefined }),
    );

    if (!employeeToLogout)
      throw new UnauthorizedException('Employee not found');

    await this.revokeRefreshToken(employeeToLogout.refreshToken);
  }

  async validateEmployee(
    login: string,
    password: string,
    workshopId: bigint,
  ): Promise<Employee | null> {
    const employee = await this.prisma.employee.findUnique({
      where: { login_workshopId: { login, workshopId } },
    });
    if (!employee) return null;
    const isPasswordValid = await bcrypt.compare(password, employee.password);
    return isPasswordValid ? employee : null;
  }

  async generateTokens(
    employee: Employee,
    loggedInBy: keyof typeof LoggedInBy,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    const payload: JwtEmployeePayload = {
      employeeId: employee.employeeId,
      workshopId: employee.workshopId,
      entityType: EntityType.EMPLOYEE,
      loggedInBy,
      permissions: employee.permissions || [],
    };

    const accessToken = this.jwtService.sign(payload, {
      expiresIn: '12h',
      secret: process.env.EMPLOYEE_ACCESS_SECRET,
    });

    const refreshToken = this.jwtService.sign(payload, {
      jwtid: uuidv4(),
      expiresIn: '7d',
      secret: process.env.EMPLOYEE_REFRESH_SECRET,
    });
    return { accessToken, refreshToken };
  }
}
