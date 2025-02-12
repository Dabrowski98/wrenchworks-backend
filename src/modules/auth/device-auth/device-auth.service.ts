import { Injectable } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { EmployeeService } from 'src/modules/employee/employee.service';
import { WorkshopService } from 'src/modules/workshop/workshop.service';
import { WorkshopDevice } from 'src/modules/workshop-device/dto/workshop-device.model';
import * as crypto from 'crypto';
import { AcceptWorkshopDeviceInput } from './dto/accept-workshop-device.input';
import { RequestDeviceRegistrationInput } from './dto/request-device-registration.input';
import { WorkshopDeviceOTPService } from 'src/modules/workshop-device-otp/workshop-device-otp.service';
import { WorkshopDeviceService } from 'src/modules/workshop-device/workshop-device.service';
import { JwtEmployeePayload } from '../employee-auth/dto';
import { isEmployeePayload, isUserPayload } from 'src/common/utils/type-guards';
import { JwtUserPayload } from '../user-auth/dto';
import { AbilityFactory, Action } from 'src/modules/ability/ability.factory';
import { ForbiddenError, subject } from '@casl/ability';
import { User } from 'src/modules/user/dto/user.model';
import { Employee } from 'src/modules/employee/dto';
import { UserService } from 'src/modules/user/user.service';
import { WorkshopDeviceStatus } from '@prisma/client';

@Injectable()
export class DeviceAuthService {
  constructor(
    private readonly employeeService: EmployeeService,
    private readonly workshopService: WorkshopService,
    private readonly workshopDeviceOTPService: WorkshopDeviceOTPService,
    private readonly workshopDeviceService: WorkshopDeviceService,
    private readonly abilityFactory: AbilityFactory,
    private readonly prisma: PrismaService,
  ) {}

  async generateDeviceOTP(
    currentEntity: JwtEmployeePayload | JwtUserPayload,
    workshopId: bigint,
  ): Promise<string> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    ForbiddenError.from(ability).throwUnlessCan(
      Action.Create,
      subject('WorkshopDevice', {
        workshopId,
      } as any),
    );

    const workshop = await this.workshopService.findOne({
      where: { workshopId },
    });

    if (!workshop) throw new BadRequestException('Workshop not found');

    const existingOTP = await this.workshopDeviceOTPService.findOne({
      where: {
        workshopId,
      },
    });

    if (existingOTP && existingOTP.expiresAt < new Date()) {
      await this.workshopDeviceOTPService.delete({
        where: { WorkshopDeviceOtpId: existingOTP.WorkshopDeviceOtpId },
      });
    }

    if (existingOTP && existingOTP.expiresAt > new Date()) {
      throw new BadRequestException(
        `Use previous OTP or wait till ${existingOTP.expiresAt.getTime()} to generate new one`,
      );
    }

    const code = crypto.randomBytes(4).toString('hex').slice(0, 7);
    const timeInMinutes = 15 * 60 * 1000;
    const expiresAt = new Date(Date.now() + timeInMinutes);

    await this.workshopDeviceOTPService.create({
      code,
      expiresAt,
      employeeId: isEmployeePayload(currentEntity)
        ? currentEntity.employeeId
        : undefined,
      workshop: { connect: { workshopId } },
    });

    return code;
  }

  async requestDeviceRegistration(
    requestDeviceRegistrationInput: RequestDeviceRegistrationInput,
  ): Promise<WorkshopDevice> {
    const { code, deviceSerialNumber, deviceName } =
      requestDeviceRegistrationInput;

    const DeviceOTP = await this.workshopDeviceOTPService.findOne({
      where: {
        code,
      },
    });
    if (!DeviceOTP) throw new BadRequestException('Invalid code');
    if (DeviceOTP.expiresAt < new Date())
      throw new BadRequestException('Code expired');

    const existingDevice = await this.workshopDeviceService.findOne({
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

    const workshopDevice = await this.workshopDeviceService.create(
      {
        serialNumber: deviceSerialNumber,
        deviceName: deviceName,
      },
      DeviceOTP.workshopId,
    );
    return workshopDevice;
  }

  async acceptDeviceRegistration(
    currentEntity: JwtEmployeePayload | JwtUserPayload,
    acceptWorkshopDeviceInput: AcceptWorkshopDeviceInput,
  ): Promise<WorkshopDevice> {
    const { deviceId, deviceName, workshopId } = acceptWorkshopDeviceInput;

    const workshopDevicesCount = (
      await this.workshopService.resolveCount(workshopId)
    ).workshopDevices;

    if (workshopDevicesCount >= Number(process.env.WORKSHOP_MAX_DEVICES))
      throw new BadRequestException(
        'Workshop has reached the maximum number of devices.',
      );

    const device = await this.prisma.workshopDevice.findUnique({
      where: {
        workshopDeviceId: deviceId,
      },
      include: { workshop: true },
    });

    if (!device) throw new BadRequestException('Device not found');

    if (device.acceptedAt)
      throw new BadRequestException('Device already accepted');

    const ability = await this.abilityFactory.defineAbility(currentEntity);

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Update,
      subject('WorkshopDevice', device),
    );

    return await this.workshopDeviceService.update({
      where: { workshopDeviceId: deviceId },
      data: {
        acceptedBy: isEmployeePayload(currentEntity)
          ? currentEntity.employeeId
          : undefined,
        status: WorkshopDeviceStatus.ACTIVE,
        acceptedAt: new Date(),
        deviceName,
      },
    });
  }

  async removeDevice(
    currentEntity: JwtEmployeePayload | JwtUserPayload,
    deviceId: bigint,
  ): Promise<Boolean> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);

    const device = await this.prisma.workshopDevice.findUnique({
      where: { workshopDeviceId: deviceId },
      include: { workshop: true },
    });

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Delete,
      subject('WorkshopDevice', device),
    );

    if (!device) throw new BadRequestException('Device not found');

    return await this.workshopDeviceService.delete({
      where: { workshopDeviceId: deviceId },
    });
  }
}
