import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { WorkshopDeviceOTP } from './dto/workshop-device-otp.model';
import { FindUniqueWorkshopDeviceOtpArgs } from '../prisma';
import {
    WorkshopDeviceOTPCreateInput,
  WorkshopDeviceOTPWhereInput,
  WorkshopDeviceOTPWhereUniqueInput,
} from './dto';

@Injectable()
export class WorkshopDeviceOTPService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    input: WorkshopDeviceOTPCreateInput,
  ): Promise<WorkshopDeviceOTP> {
    return this.prisma.workshopDeviceOTP.create({ data: input });
  }

  async findOne(
    where: FindUniqueWorkshopDeviceOtpArgs,
  ): Promise<WorkshopDeviceOTP | null> {
    return this.prisma.workshopDeviceOTP.findUnique({ where });
  }

  async update(
    where: WorkshopDeviceOTPWhereUniqueInput,
    data: Prisma.WorkshopDeviceOTPUpdateInput,
  ): Promise<WorkshopDeviceOTP> {
    return this.prisma.workshopDeviceOTP.update({ where, data });
  }

  async delete(
    where: WorkshopDeviceOTPWhereUniqueInput,
  ): Promise<WorkshopDeviceOTP> {
    return this.prisma.workshopDeviceOTP.delete({ where });
  }

  async count(where: WorkshopDeviceOTPWhereInput): Promise<number> {
    return this.prisma.workshopDeviceOTP.count({ where });
  }
}
