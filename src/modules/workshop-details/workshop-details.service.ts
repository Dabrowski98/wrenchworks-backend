import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import {
  CreateOneWorkshopDetailsArgs,
  DeleteOneWorkshopDetailsArgs,
  FindManyWorkshopDetailsArgs,
  FindUniqueWorkshopDetailsArgs,
  UpdateOneWorkshopDetailsArgs,
  WorkshopDetails, 
} from './dto'; 

import { RecordNotFoundError } from 'src/common/custom-errors/errors.config';
import { Workshop } from '../workshop/dto';

@Injectable()
export class WorkshopDetailsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(args: CreateOneWorkshopDetailsArgs): Promise<WorkshopDetails> {
    return this.prisma.workshopDetails.create({
      data: {
        ...args.data,
      },
    });
  }

  async findOne(args: FindUniqueWorkshopDetailsArgs): Promise<WorkshopDetails> {
    const workshopDetails = await this.prisma.workshopDetails.findUnique(args);
    if (!workshopDetails) throw new RecordNotFoundError(WorkshopDetails);
    return workshopDetails;
  }

  async findMany(
    args: FindManyWorkshopDetailsArgs,
  ): Promise<WorkshopDetails[]> {
    return this.prisma.workshopDetails.findMany(args);
  }

  async update(args: UpdateOneWorkshopDetailsArgs): Promise<WorkshopDetails> {
    return this.prisma.workshopDetails.update({
      data: { ...args.data },
      where: args.where,
    });
  }

  async delete(args: DeleteOneWorkshopDetailsArgs): Promise<boolean> {
    return await this.prisma.workshopDetails
      .delete({
        where: args.where,
      })
      .then(() => true)
      .catch(() => false);
  }

  // RESOLVE METHODS

  async workshop(workshopId: bigint): Promise<Workshop> {
    return (
      await this.prisma.workshopDetails.findUnique({
        where: { workshopId },
        include: { workshop: true },
      })
    ).workshop;
  }
}
