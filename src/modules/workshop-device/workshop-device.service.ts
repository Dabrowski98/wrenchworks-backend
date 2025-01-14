import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { WorkshopDeviceCreateInput } from './dto/workshop-device-create.input';
import { WorkshopDevice } from './dto/workshop-device.model';
import { WorkshopDeviceWhereUniqueInput } from './dto/workshop-device-where-unique.input';
import { WorkshopDeviceWhereInput } from './dto/workshop-device-where.input';
import { WorkshopDeviceUpdateInput } from './dto/workshop-device-update.input';

@Injectable()
export class WorkshopDeviceService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: WorkshopDeviceCreateInput): Promise<WorkshopDevice> {
    return this.prisma.workshopDevice.create({ data });
  }

  async findOne(
    where: WorkshopDeviceWhereUniqueInput,
  ): Promise<WorkshopDevice | null> {
    return this.prisma.workshopDevice.findUnique({ where });
  }

  async findMany(where: WorkshopDeviceWhereInput): Promise<WorkshopDevice[]> {
    return this.prisma.workshopDevice.findMany({ where });
  }

  async update(
    where: WorkshopDeviceWhereUniqueInput,
    data: WorkshopDeviceUpdateInput,
  ): Promise<WorkshopDevice> {
    return this.prisma.workshopDevice.update({ where, data });
  }

  async delete(where: WorkshopDeviceWhereUniqueInput): Promise<WorkshopDevice> {
    return this.prisma.workshopDevice.delete({ where });
  }
}
