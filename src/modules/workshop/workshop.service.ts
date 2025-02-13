import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import {
  CreateOneWorkshopArgs,
  UpdateOneWorkshopArgs,
  Workshop,
  FindManyWorkshopArgs,
  WorkshopCount,
  WorkshopCreateInput,
  FindUniqueWorkshopArgs,
  DeleteOneWorkshopArgs,
} from './dto';
import { NoDataProvidedForUpdateError } from 'src/common/custom-errors/errors.config';
import { Address } from '../address/dto';
import { WorkshopDetails } from '../workshop-details/dto';
import { ServiceRequest } from '../service-request/dto';
import { Review } from '../review/dto';
import { WorkshopJob } from '../workshop-job/dto';
import { RecordNotFoundError } from 'src/common/custom-errors/errors.config';
import { Customer } from '../customer/dto';
import { Employee } from '../employee/dto';
import { Service } from '../service/dto';
import { JobCategory } from '../job-category/dto';
import { User } from '../user/dto';
import { JwtEmployeePayload } from '../auth/employee-auth/custom-dto/jwt-employee-payload';
import { JwtUserPayload } from '../auth/user-auth/custom-dto/jwt-user-payload';
import { AbilityFactory, accessibleBy, Action } from '../ability';
import { ForbiddenError, PureAbility, subject } from '@casl/ability';

@Injectable()
export class WorkshopService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly abilityFactory: AbilityFactory,
  ) {}

  async create(args: CreateOneWorkshopArgs): Promise<Workshop> {
    return this.prisma.workshop.create(args);
  }

  async update(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args: UpdateOneWorkshopArgs,
  ): Promise<Workshop> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    const workshop = await this.prisma.workshop.findFirst({
      where: { workshopId: args.where.workshopId },
      select: {
        workshopId: true,
        ownerId: true,
      },
    });

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Update,
      subject('Workshop', workshop as any),
    );
    return this.prisma.workshop.update(args);
  }

  async findMany(args?: FindManyWorkshopArgs): Promise<Workshop[]> {
    return this.prisma.workshop.findMany(args || {});
  }

  async findOne(args: FindUniqueWorkshopArgs): Promise<Workshop> {
    const workshop = await this.prisma.workshop.findUnique(args);
    if (!workshop) throw new RecordNotFoundError(Workshop);
    return workshop;
  }

  async delete(
    currentUser: JwtUserPayload,
    args: DeleteOneWorkshopArgs,
  ): Promise<Boolean> {
    const ability = await this.abilityFactory.defineAbility(currentUser);
    const workshop = await this.findOne({
      where: { workshopId: args.where.workshopId },
    });

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Delete,
      subject('Workshop', workshop),
    );
    return await this.prisma.workshop
      .delete({
        where: args.where,
      })
      .then(() => true)
      .catch(() => false);
  }

  //RESOLVE FIELDS

  async address(
    ability: PureAbility,
    workshopId: bigint,
  ): Promise<Address | null> {
    return (
      this.prisma.address.findFirst({
        where: {
          AND: [accessibleBy(ability).Address, { workshop: { workshopId } }],
        },
      }) || null
    );
  }

  async customers(
    ability: PureAbility,
    workshopId: bigint,
  ): Promise<Customer[]> {
    return await this.prisma.customer.findMany({
      where: { AND: [accessibleBy(ability).Customer, { workshopId }] },
    });
  }

  async employees(
    ability: PureAbility,
    workshopId: bigint,
  ): Promise<Employee[]> {
    return await this.prisma.employee.findMany({
      where: { AND: [accessibleBy(ability).Employee, { workshopId }] },
    });
  }

  async reviews(ability: PureAbility, workshopId: bigint): Promise<Review[]> {
    return await this.prisma.review.findMany({
      where: { AND: [accessibleBy(ability).Review, { workshopId }] },
    });
  }

  async serviceRequests(
    ability: PureAbility,
    workshopId: bigint,
  ): Promise<ServiceRequest[]> {
    return await this.prisma.serviceRequest.findMany({
      where: { AND: [accessibleBy(ability).ServiceRequest, { workshopId }] },
    });
  }

  async services(ability: PureAbility, workshopId: bigint): Promise<Service[]> {
    return await this.prisma.service.findMany({
      where: { AND: [accessibleBy(ability).Service, { workshopId }] },
    });
  }

  async user(ability: PureAbility, workshopId: bigint): Promise<User> {
    return await this.prisma.user.findFirst({
      where: {
        AND: [
          accessibleBy(ability).User,
          { workshops: { some: { workshopId } } },
        ],
      },
    });
  }

  async workshopDetails(
    ability: PureAbility,
    workshopId: bigint,
  ): Promise<WorkshopDetails | null> {
    return (
      (await this.prisma.workshopDetails.findFirst({
        where: {
          AND: [
            accessibleBy(ability).WorkshopDetails,
            { workshop: { workshopId } },
          ],
        },
      })) || null
    );
  }

  async workshopJobs(
    ability: PureAbility,
    workshopId: bigint,
  ): Promise<WorkshopJob[]> {
    return await this.prisma.workshopJob.findMany({
      where: { AND: [accessibleBy(ability).WorkshopJob, { workshopId }] },
    });
  }

  async jobCategories(
    ability: PureAbility,
    workshopId: bigint,
  ): Promise<JobCategory[]> {
    return await this.prisma.jobCategory.findMany({
      where: {
        AND: [
          accessibleBy(ability).JobCategory,
          { workshops: { some: { workshopId } } },
        ],
      },
    });
  }

  async resolveCount(
    ability: PureAbility,
    workshopId: bigint,
  ): Promise<WorkshopCount> {
    const counts = await this.prisma.$transaction([
      this.prisma.customer.count({
        where: { AND: [accessibleBy(ability).Customer, { workshopId }] },
      }),
      this.prisma.employee.count({
        where: { AND: [accessibleBy(ability).Employee, { workshopId }] },
      }),
      this.prisma.review.count({
        where: { AND: [accessibleBy(ability).Review, { workshopId }] },
      }),
      this.prisma.serviceRequest.count({
        where: { AND: [accessibleBy(ability).ServiceRequest, { workshopId }] },
      }),
      this.prisma.service.count({
        where: { AND: [accessibleBy(ability).Service, { workshopId }] },
      }),
      this.prisma.workshopJob.count({
        where: { AND: [accessibleBy(ability).WorkshopJob, { workshopId }] },
      }),
      this.prisma.jobCategory.count({
        where: {
          AND: [
            accessibleBy(ability).JobCategory,
            { workshops: { some: { workshopId } } },
          ],
        },
      }),
      this.prisma.joinWorkshopRequest.count({
        where: {
          AND: [accessibleBy(ability).JoinWorkshopRequest, { workshopId }],
        },
      }),
      this.prisma.workshopDevice.count({
        where: { AND: [accessibleBy(ability).WorkshopDevice, { workshopId }] },
      }),
    ]);

    const [
      customers,
      employees,
      reviews,
      serviceRequests,
      services,
      workshopJobs,
      jobCategories,
      joinWorkshopRequests,
      workshopDevices,
    ] = counts;

    return {
      customers,
      employees,
      reviews,
      serviceRequests,
      services,
      workshopJobs,
      jobCategories,
      joinWorkshopRequests,
      workshopDevices,
    };
  }
}
