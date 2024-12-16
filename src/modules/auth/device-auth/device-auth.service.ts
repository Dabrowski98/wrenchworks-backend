import { Injectable } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { EmployeeService } from 'src/modules/employee/employee.service';
import { WorkshopService } from 'src/modules/workshop/workshop.service';
import { WorkshopDevice } from 'src/modules/workshop-device/dto/workshop-device.model'; 
import * as crypto from 'crypto';
import { AcceptWorkshopDeviceInput } from './dto/accept-workshop-device.input';
import { RequestDeviceRegistrationInput } from './dto/request-device-registration.input';

@Injectable()
export class DeviceAuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly employeeService: EmployeeService,
    private readonly workshopService: WorkshopService,
  ) {}

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
}
