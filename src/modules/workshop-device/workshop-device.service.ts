import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { WorkshopDeviceCreateInput } from './dto/workshop-device-create.input';
import { WorkshopDevice } from './dto/workshop-device.model';
import { FindUniqueWorkshopDeviceArgs } from './dto/find-unique-workshop-device.args';
import { RecordNotFoundError } from 'src/common/custom-errors/errors.config';
import {
  CreateOneWorkshopDeviceArgs,
  DeleteOneWorkshopDeviceArgs,
  FindManyWorkshopDeviceArgs,
  UpdateOneWorkshopDeviceArgs,
} from './dto';
import { Workshop } from '../workshop/dto/workshop.model';
import { WorkshopDeviceStatus } from '@prisma/client';
import { ServiceRequestCount } from '../service-request/dto';
import { JwtUserPayload } from '../auth/user-auth/custom-dto/jwt-user-payload';
import { AbilityFactory, Action } from '../ability/ability.factory';
import { JwtEmployeePayload } from '../auth/employee-auth/custom-dto/jwt-employee-payload';
import { subject } from '@casl/ability';
import { ForbiddenError } from '@casl/ability';
import { accessibleBy } from '@casl/prisma';
import { WorkshopDeviceChangeNameArgs } from './custom-dto/workshop-device-change-name.args';

@Injectable()
export class WorkshopDeviceService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly abilityFactory: AbilityFactory,
  ) {}

  async create(args: CreateOneWorkshopDeviceArgs): Promise<WorkshopDevice> {
    return this.prisma.workshopDevice.create(args);
  }

  async findOne(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args: FindUniqueWorkshopDeviceArgs,
  ): Promise<WorkshopDevice> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    const workshopDevice = await this.prisma.workshopDevice.findFirst({
      where: { AND: [accessibleBy(ability).WorkshopDevice, args.where] },
    });
    if (!workshopDevice) {
      throw new RecordNotFoundError(WorkshopDevice);
    }
    return workshopDevice;
  }

  async findMany(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args: FindManyWorkshopDeviceArgs,
  ): Promise<WorkshopDevice[]> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    return await this.prisma.workshopDevice.findMany({
      where: {
        AND: [accessibleBy(ability).WorkshopDevice, args.where],
      },
    });
  }

  async update(args: UpdateOneWorkshopDeviceArgs): Promise<WorkshopDevice> {
    return this.prisma.workshopDevice.update(args);
  }

  async changeName(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args: WorkshopDeviceChangeNameArgs,
  ): Promise<WorkshopDevice> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    const workshopDevice = await this.prisma.workshopDevice.findUnique({
      where: args.where,
      include: { workshop: { select: { workshopId: true, ownerId: true } } },
    });
    ForbiddenError.from(ability).throwUnlessCan(
      Action.Update,
      subject('WorkshopDevice', workshopDevice),
    );

    return this.prisma.workshopDevice.update({
      where: args.where,
      data: { deviceName: args.data.deviceName },
    });
  }

  async delete(args: DeleteOneWorkshopDeviceArgs): Promise<Boolean> {
    return this.prisma.workshopDevice
      .delete({
        where: args.where,
      })
      .then(() => true)
      .catch(() => false);
  }

  async disable(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    deviceId: bigint,
  ): Promise<Boolean> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    const workshopDevice = await this.prisma.workshopDevice.findUnique({
      where: { workshopDeviceId: deviceId },
      include: { workshop: { select: { workshopId: true, ownerId: true } } },
    });

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Update,
      subject('WorkshopDevice', workshopDevice),
    );

    return !!this.prisma.workshopDevice.update({
      where: { workshopDeviceId: deviceId },
      data: { status: WorkshopDeviceStatus.DISABLED },
    });
  }

  async enable(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    deviceId: bigint,
  ): Promise<Boolean> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    const workshopDevice = await this.prisma.workshopDevice.findUnique({
      where: { workshopDeviceId: deviceId },
      include: { workshop: { select: { workshopId: true, ownerId: true } } },
    });

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Update,
      subject('WorkshopDevice', workshopDevice),
    );

    return !!this.prisma.workshopDevice.update({
      where: { workshopDeviceId: deviceId },
      data: { status: WorkshopDeviceStatus.ENABLED },
    });
  }

  // RESOLVE METHODS

  async workshop(workshopDeviceId: bigint): Promise<Workshop> {
    return (
      await this.prisma.workshopDevice.findUnique({
        where: { workshopDeviceId },
        include: { workshop: true },
      })
    ).workshop;
  }
}
