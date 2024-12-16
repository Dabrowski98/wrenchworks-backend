import {
  BadRequestException,
  ForbiddenException,
  UnauthorizedException,
} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { Employee } from 'src/modules/employee/dto'; 
import { PrismaService } from 'src/database/prisma.service';
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

@Injectable()
export class EmployeeAuthService {
  constructor(
    private readonly employeeService: EmployeeService,
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async registerEmployee(
    input: RegisterEmployeeInput,
    registrantEmployeeId: bigint,
  ): Promise<Employee> {
    // create guard to check that
    const registrant = await this.employeeService.findEmployee({
      where: { employeeId: registrantEmployeeId },
    });

    if (!registrant) {
      throw new ForbiddenException();
    }

    const hashedPassword = await bcrypt.hash(input.password, 10);
    input = { ...input, password: hashedPassword };

    return this.employeeService.createEmployee({
      ...input,
      workshop: { connect: { workshopId: registrant.workshopId } },
    });
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

    await this.prisma.employee.update({
      where: { employeeId: employee.employeeId },
      data: { refreshToken },
    });

    return { accessToken, refreshToken, employee };
  }

  async loginEmployeeByWorkshop(
    employee: Employee,
    deviceSerialNumber: string,
    workshopId: bigint,
  ): Promise<LoginEmployeeResponse> {
    const device = await this.prisma.workshopDevice.findUnique({
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

    await this.prisma.employee.update({
      where: { employeeId: employee.employeeId },
      data: { refreshToken },
    });

    return { accessToken, refreshToken, employee };
  }

  async revokeRefreshToken(refreshToken: string) {
    const decodedRefreshToken = await this.jwtService.verify(refreshToken, {
      secret: process.env.EMPLOYEE_REFRESH_SECRET,
    });

    if (!decodedRefreshToken) return false;

    const employee = await this.employeeService.findEmployee({
      where: { employeeId: decodedRefreshToken.sub },
    });

    if (!employee.refreshToken) return false;

    const result = await this.prisma.employee.update({
      where: { employeeId: decodedRefreshToken.sub },
      data: { refreshToken: null },
    });

    return result ? true : false;
  }

  async refreshTokens(currentRT: string): Promise<LoginEmployeeResponse> {
    const decodedRefreshToken = await this.jwtService.verify(currentRT, {
      secret: process.env.EMPLOYEE_REFRESH_SECRET,
    });

    if (!decodedRefreshToken)
      throw new UnauthorizedException('Invalid refresh token');

    const employee = await this.employeeService.findEmployee({
      where: { employeeId: decodedRefreshToken.sub },
    });

    if (!employee) throw new UnauthorizedException('Employee not found');

    const { accessToken, refreshToken } = await this.generateTokens(
      employee,
      LoggedInBy.USER,
    );
    await this.revokeRefreshToken(currentRT);
    await this.prisma.employee.update({
      where: { employeeId: employee.employeeId },
      data: { refreshToken },
    });

    return { accessToken, refreshToken, employee };
  }

  async changeEmployeePassword(
    employeeId: bigint,
    changePasswordInput: ChangePasswordInput,
  ) {
    const employee = await this.employeeService.findEmployee({
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

  async logoutAnotherEmployee(employeeId: bigint, employeeIdToLogout: bigint) {
    const employee = await this.employeeService.findEmployee({
      where: { employeeId },
    });

    if (!employee) throw new UnauthorizedException('Employee not found');

    const employeeToLogout = await this.employeeService.findEmployee({
      where: { employeeId: employeeIdToLogout },
    });

    if (!employeeToLogout)
      throw new UnauthorizedException('Employee not found');

    if (employee.workshopId !== employeeToLogout.workshopId)
      throw new ForbiddenException(
        'You are not allowed to logout this employee',
      );

    await this.revokeRefreshToken(employeeToLogout.refreshToken);
  }

  async validateEmployee(
    login: string,
    password: string,
    workshopId: bigint,
  ): Promise<Employee | null> {
    const employee = await this.employeeService.findEmployee({
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
      sub: employee.employeeId,
      entityType: EntityType.EMPLOYEE,
      loggedInBy,
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

  async deleteEmployee(employeeId: bigint, employeeToDeleteId: bigint) {
    const employee = await this.employeeService.findEmployee({
      where: { employeeId: employeeToDeleteId },
    });

    if (!employee) throw new UnauthorizedException('Employee not found');

    if (employeeId === employeeToDeleteId)
      throw new ForbiddenException('You are not allowed to delete yourself');

    return !!(await this.prisma.employee.delete({
      where: { employeeId: employeeToDeleteId },
    }));
  }
}
