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
import { v4 as uuidv4 } from 'uuid';
import { ChangePasswordInput } from '../auth-common-dto';
import { WorkshopDevice } from 'src/modules/workshop-device/dto';
import * as crypto from 'crypto';
import { WorkshopService } from 'src/modules/workshop/workshop.service';
import { RequestDeviceRegistrationInput } from './dto/request-device-registration.input';
import { AcceptWorkshopDeviceInput } from './dto/accept-workshop-device.input';
import { RegisterWorkshopInput } from './dto/register-workshop.input';
import { Workshop } from 'src/modules/workshop/dto';
import { UserService } from 'src/modules/user/user.service';
import { RegisterWorkshopResponse } from './dto/register-workshop.response';
import { Type } from 'src/common/decorators/guard-decorators/entity-type.decorator';

@Injectable()
export class WorkshopAuthService {
  constructor(
    private readonly employeeService: EmployeeService,
    private readonly userService: UserService,
    private readonly workshopService: WorkshopService,
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async registerWorkshop(
    input: RegisterWorkshopInput,
    userId: bigint,
  ): Promise<RegisterWorkshopResponse> {
    const user = await this.userService.findUser(
      { where: { userId } },
      { workshops: true },
    );

    if (!user) throw new BadRequestException('User not found');

    if (user.workshops.length >= Number(process.env.USER_MAX_WORKSHOPS))
      throw new BadRequestException(
        'User has reached the maximum number of workshops he can have',
      );
    const { ownerEmployee: ownerEmployeeInput, ...workshopInput } = input;

    const workshopHashedPassword = await bcrypt.hash(
      input.password,
      Number(process.env.PASSWORD_SALT_ROUNDS),
    );

    const employeeHashedPassword = await bcrypt.hash(
      ownerEmployeeInput.password,
      Number(process.env.PASSWORD_SALT_ROUNDS),
    );

    const workshop = await this.workshopService.createWorkshop({
      ...workshopInput,
      password: workshopHashedPassword,
      user: { connect: { userId: user.userId } },
    });

    //TODO: set all permissions to true
    const ownerEmployee = await this.employeeService.createEmployee({
      ...ownerEmployeeInput,
      password: employeeHashedPassword,
      workshop: { connect: { workshopId: workshop.workshopId } },
    });

    const updatedOwnerEmployee = await this.prisma.employee.update({
      where: { employeeId: ownerEmployee.employeeId },
      data: { userId: user.userId },
    });

    return { workshop, ownerEmployee: updatedOwnerEmployee };
  }

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
      'User',
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
      'Employee',
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

  async generateDeviceOTP(employeeId: bigint): Promise<string> {
    const employee = await this.employeeService.findEmployee({
      where: { employeeId },
    });

    if (!employee) throw new BadRequestException('Employee not found');

    const workshop = await this.workshopService.findWorkshop({
      where: { workshopId: employee.workshopId },
    });

    if (!workshop) throw new BadRequestException('Workshop not found');

    const existingOTP = await this.prisma.workshopDeviceOTP.findUnique({
      where: {
        workshopId: employee.workshopId,
      },
    });

    if (existingOTP)
      throw new BadRequestException(
        'Use previous OTP or wait for it to expire',
      );

    const code = crypto.randomBytes(4).toString('hex').slice(0, 7);
    const timeInMinutes = 15 * 60 * 1000;
    const expiresAt = new Date(Date.now() + timeInMinutes);

    await this.prisma.workshopDeviceOTP.create({
      data: {
        code,
        expiresAt,
        employeeId: employee.employeeId,
        workshopId: employee.workshopId,
      },
    });

    return code;
  }

  async requestDeviceRegistration(
    requestDeviceRegistrationInput: RequestDeviceRegistrationInput,
  ): Promise<WorkshopDevice> {
    const { code, deviceSerialNumber, deviceName } =
      requestDeviceRegistrationInput;

    const DeviceOTP = await this.prisma.workshopDeviceOTP.findUnique({
      where: {
        code,
      },
    });
    if (!DeviceOTP) throw new BadRequestException('Invalid code');
    if (DeviceOTP.expiresAt < new Date())
      throw new BadRequestException('Code expired');

    const existingDevice = await this.prisma.workshopDevice.findUnique({
      where: {
        workshopId_serialNumber: {
          workshopId: DeviceOTP.workshopId,
          serialNumber: deviceSerialNumber,
        },
      },
    });

    if (existingDevice) {
      throw new BadRequestException('This device is already registered');
    }

    const workshopDevice = await this.prisma.workshopDevice.create({
      data: {
        workshopId: DeviceOTP.workshopId,
        serialNumber: deviceSerialNumber,
        deviceName: deviceName,
      },
    });

    return workshopDevice;
  }

  async acceptDeviceRegistration(
    acceptWorkshopDeviceInput: AcceptWorkshopDeviceInput,
    employeeId: bigint,
  ): Promise<WorkshopDevice> {
    const { deviceId, deviceName } = acceptWorkshopDeviceInput;

    const employee = await this.employeeService.findEmployee({
      where: { employeeId },
    });

    if (!employee) throw new BadRequestException('Employee not found');

    const workshopDevicesCount = await this.prisma.workshopDevice.count({
      where: {
        workshopId: employee.workshopId,
        acceptedBy: { not: null },
      },
    });

    if (workshopDevicesCount >= Number(process.env.WORKSHOP_MAX_DEVICES))
      throw new BadRequestException(
        'Workshop has reached the maximum number of devices.',
      );

    const device = await this.prisma.workshopDevice.findUnique({
      where: {
        workshopDeviceId: deviceId,
      },
    });
    if (!device) throw new BadRequestException('Device not found');

    if (device.acceptedBy)
      throw new BadRequestException('Device already accepted');

    return await this.prisma.workshopDevice.update({
      where: { workshopDeviceId: deviceId },
      data: {
        acceptedBy: employeeId,
        acceptedAt: new Date(),
        deviceName,
      },
    });
  }

  async removeDevice(deviceId: bigint): Promise<WorkshopDevice> {
    const device = await this.prisma.workshopDevice.findUnique({
      where: { workshopDeviceId: deviceId },
    });

    if (!device) throw new BadRequestException('Device not found');

    return await this.prisma.workshopDevice.delete({
      where: { workshopDeviceId: deviceId },
    });
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
