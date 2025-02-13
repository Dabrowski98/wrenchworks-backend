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
import { JwtUserPayload } from '../auth/user-auth/custom-dto/jwt-user-payload';
import { AbilityFactory } from '../ability';
import { Action } from '../ability';
import { ForbiddenError, subject } from '@casl/ability';
import { JwtEmployeePayload } from '../auth/employee-auth/custom-dto/jwt-employee-payload';

@Injectable()
export class WorkshopDetailsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly abilityFactory: AbilityFactory,
  ) {}

  async create(
    currentUser: JwtUserPayload,
    args: CreateOneWorkshopDetailsArgs,
  ): Promise<WorkshopDetails> {
    const ability = await this.abilityFactory.defineAbility(currentUser);
    const workshop = await this.prisma.workshop.findUnique({
      where: { workshopId: args.data.workshop.connect.workshopId },
      select: { workshopId: true, ownerId: true },
    });

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Create,
      subject('WorkshopDetails', { workshop } as any),
    );
    return this.prisma.workshopDetails.create(args);
  }

  async findOne(args: FindUniqueWorkshopDetailsArgs): Promise<WorkshopDetails> {
    const workshopDetails = await this.prisma.workshopDetails.findUnique(args);
    if (!workshopDetails) throw new RecordNotFoundError(WorkshopDetails);
    return workshopDetails;
  }

  async findMany(
    args?: FindManyWorkshopDetailsArgs,
  ): Promise<WorkshopDetails[]> {
    return this.prisma.workshopDetails.findMany(args || {});
  }

  async update(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args: UpdateOneWorkshopDetailsArgs,
  ): Promise<WorkshopDetails> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    const workshopDetails = await this.prisma.workshopDetails.findUnique({
      where: args.where,
      include: { workshop: { select: { workshopId: true, ownerId: true } } },
    });

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Update,
      subject('WorkshopDetails', workshopDetails as any),
    );

    return this.prisma.workshopDetails.update(args);
  }

  async delete(
    currentUser: JwtUserPayload,
    args: DeleteOneWorkshopDetailsArgs,
  ): Promise<boolean> {
    const ability = await this.abilityFactory.defineAbility(currentUser);
    const workshopDetails = await this.prisma.workshopDetails.findUnique({
      where: args.where,
      include: { workshop: { select: { workshopId: true, ownerId: true } } },
    });

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Delete,
      subject('WorkshopDetails', workshopDetails as any),
    );

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
