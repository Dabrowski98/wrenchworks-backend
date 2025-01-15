import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { WorkshopDeviceOtpCreateInput } from './dto/workshop-device-otp-create.input';
import {
  CreateOneWorkshopDeviceOtpArgs,
  DeleteOneWorkshopDeviceOtpArgs,
  FindUniqueWorkshopDeviceOtpArgs,
  UpdateOneWorkshopDeviceOtpArgs,
  WorkshopDeviceOtp,
} from './dto';
import { RecordNotFoundError } from 'src/common/custom-errors/errors.config';
import { Workshop } from '../workshop/dto/workshop.model';

@Injectable()
export class WorkshopDeviceOTPService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    input: WorkshopDeviceOtpCreateInput,
  ): Promise<WorkshopDeviceOtp> {
    return this.prisma.workshopDeviceOtp.create({ data: input });
  }

  async findOne(
    where: FindUniqueWorkshopDeviceOtpArgs,
  ): Promise<WorkshopDeviceOtp> {
    const otp = await this.prisma.workshopDeviceOtp.findUnique(where);

    if (!otp) throw new RecordNotFoundError(WorkshopDeviceOtp);

    return otp;
  }

  async update(args: UpdateOneWorkshopDeviceOtpArgs): Promise<WorkshopDeviceOtp> {
    return this.prisma.workshopDeviceOtp.update(args);
  }

  async delete(args: DeleteOneWorkshopDeviceOtpArgs): Promise<Boolean> {
    return !!this.prisma.workshopDeviceOtp.delete(args);
  }

  // RESOLVER METHODS

  async workshop(workshopDeviceOtpId: bigint): Promise<Workshop> {
    return (
      await this.prisma.workshopDeviceOtp.findUnique({
        where: { WorkshopDeviceOtpId: workshopDeviceOtpId },
        include: { workshop: true },
      })
    ).workshop;
  }
}
