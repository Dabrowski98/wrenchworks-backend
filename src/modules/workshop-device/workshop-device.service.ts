import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { WorkshopDeviceCreateInput } from './dto/workshop-device-create.input';
import { WorkshopDevice } from './dto/workshop-device.model';
import { FindUniqueWorkshopDeviceArgs } from './dto/find-unique-workshop-device.args';
import { RecordNotFoundError } from 'src/common/custom-errors/errors.config';
import {
  DeleteOneWorkshopDeviceArgs,
  FindManyWorkshopDeviceArgs,
  UpdateOneWorkshopDeviceArgs,
} from './dto';
import { Workshop } from '../workshop/dto/workshop.model';
import { WorkshopDeviceStatus } from '@prisma/client';

@Injectable()
export class WorkshopDeviceService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    data: WorkshopDeviceCreateInput,
    workshopId: bigint,
  ): Promise<WorkshopDevice> {
    return this.prisma.workshopDevice.create({
      data: { ...data, workshop: { connect: { workshopId } } },
    });
  }

  async findOne(args: FindUniqueWorkshopDeviceArgs): Promise<WorkshopDevice> {
    const result = await this.prisma.workshopDevice.findUnique(args);

    if (!result) {
      throw new RecordNotFoundError(WorkshopDevice);
    }

    return result;
  }

  async findMany(args: FindManyWorkshopDeviceArgs): Promise<WorkshopDevice[]> {
    return this.prisma.workshopDevice.findMany(args);
  }

  async findAll(): Promise<WorkshopDevice[]> {
    return this.prisma.workshopDevice.findMany();
  }

  async update(args: UpdateOneWorkshopDeviceArgs): Promise<WorkshopDevice> {
    return this.prisma.workshopDevice.update(args);
  }

  async delete(args: DeleteOneWorkshopDeviceArgs): Promise<Boolean> {
    return this.prisma.workshopDevice
      .delete({
        where: args.where,
      })
      .then(() => true)
      .catch(() => false);
  }

  async disable(deviceId: bigint): Promise<Boolean> {
    return !!this.prisma.workshopDevice.update({
      where: { workshopDeviceId: deviceId },
      data: { status: WorkshopDeviceStatus.DISABLED },
    });
  }

  async enable(deviceId: bigint): Promise<Boolean> {
    return !!this.prisma.workshopDevice.update({
      where: { workshopDeviceId: deviceId },
      data: { status: WorkshopDeviceStatus.ACTIVE },
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
