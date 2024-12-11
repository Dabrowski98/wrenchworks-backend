import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/database/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { Employee } from 'src/modules/employee/dto';
import { RegisterEmployeeInput } from './dto/register-employee.input';
import { LoginEmployeeInput } from './dto/login-employee.input';
import { EmployeeService } from 'src/modules/employee/employee.service';
import { LoginEmployeeResponse } from './dto/login-employee.response';
import { Type } from 'src/common/decorators/guard-decorators/entity-type.decorator';
import { v4 as uuidv4 } from 'uuid';
import { ChangePasswordInput } from '../auth-common-dto';

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
    const hashedPassword = await bcrypt.hash(input.password, 10);


    // create guard to check that
    const registrant = await this.employeeService.findEmployee({
      where: { employeeId: registrantEmployeeId },
    });

    if (!registrant) {
      throw new ForbiddenException();
    }
    //

    const employeeData: RegisterEmployeeInput = {
      ...input,
      password: hashedPassword,
      workshop: { connect: { workshopId: registrant.workshopId } },
    };

    return this.prisma.employee.create({
      data: employeeData,
    });
  }

  async loginEmployeeByUser(
    employee: Employee,
    userId: bigint,
  ): Promise<LoginEmployeeResponse> {
    if (userId !== employee.userId)
      throw new ForbiddenException(
        'That employee record is not associated with that user',
      );

    console.log(employee);

    const { accessToken, refreshToken } = await this.generateTokens(
      employee,
      'User',
    );
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

    const { accessToken, refreshToken } = await this.generateTokens(
      employee,
      'Workshop',
    );

    await this.prisma.employee.update({
      where: { employeeId: employee.employeeId },
      data: { refreshToken },
    });

    return { accessToken, refreshToken, employee };
  }

  // async registerNewDevice()

  async generateTokens(
    employee: Employee,
    loggedInBy: string,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    const payload = {
      sub: employee.employeeId,
      entityType: Type.EMPLOYEE,
      loggedInBy,
    };
    const accessToken = this.jwtService.sign(payload, {
      expiresIn: '15m',
      secret: process.env.EMPLOYEE_ACCESS_SECRET,
    });
    const refreshToken = this.jwtService.sign(payload, {
      jwtid: uuidv4(),
      expiresIn: '7d',
      secret: process.env.EMPLOYEE_REFRESH_SECRET,
    });
    return { accessToken, refreshToken };
  }

  async logoutAnotherEmployee(employeeId: bigint, employeeIdToLogout: bigint) {

    //check permissions to proceed

    const employee = await this.employeeService.findEmployee({
      where: { employeeId },
    });

    if (!employee) throw new UnauthorizedException('Employee not found');

    const employeeToLogout = await this.employeeService.findEmployee({
      where: { employeeId: employeeIdToLogout },
    });

    if (!employeeToLogout) throw new UnauthorizedException('Employee not found');

    if (employee.workshopId !== employeeToLogout.workshopId) throw new ForbiddenException('You are not allowed to logout this employee');

    await this.revokeRefreshToken(employeeToLogout.refreshToken);

    return true;
  }

  async revokeRefreshToken(refreshToken: string) {
    const decodedRefreshToken = await this.jwtService.verify(refreshToken, {
      secret: process.env.EMPLOYEE_REFRESH_SECRET,
    });

    if (!decodedRefreshToken) return false;

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
      'Employee',
    );
    await this.revokeRefreshToken(currentRT);
    await this.prisma.employee.update({
      where: { employeeId: employee.employeeId },
      data: { refreshToken },
    });

    return { accessToken, refreshToken, employee };
  }

  async changeEmployeePassword(employeeId: bigint, changePasswordInput: ChangePasswordInput) {
    const employee = await this.employeeService.findEmployee({
      where: { employeeId },
    });

    if (!employee) throw new UnauthorizedException('Employee not found');

    const isPasswordValid = await bcrypt.compare(changePasswordInput.oldPassword, employee.password);

    if (!isPasswordValid) throw new UnauthorizedException('Invalid old password');

    if (changePasswordInput.oldPassword === changePasswordInput.newPassword) throw new BadRequestException('New password cannot be the same as the old password');

    const hashedPassword = await bcrypt.hash(changePasswordInput.newPassword, 10);

    const result =await this.prisma.employee.update({
      where: { employeeId },
      data: { password: hashedPassword },
    });

    return result ? true : false;
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
}
