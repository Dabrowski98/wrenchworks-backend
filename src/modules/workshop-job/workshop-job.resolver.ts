import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { WorkshopJobService } from './workshop-job.service';
import { WorkshopJob, WorkshopJobCount } from './dto';
import {
  CreateOneWorkshopJobArgs,
  DeleteOneWorkshopJobArgs,
  FindManyWorkshopJobArgs,
  FindUniqueWorkshopJobArgs,
  UpdateOneWorkshopJobArgs,
  DeleteManyWorkshopJobArgs,
} from './dto';
import { Workshop } from '../workshop/dto';
import { Task } from '../task/dto';
import { Job } from '../job/dto';
import { Public } from 'src/common/decorators/guard-decorators/public.decorator';
import { EmployeeJwtAuthGuard } from '../auth/employee-auth/guards/employee-jwt-auth.guard';
import { OrGuards } from 'src/common/decorators/guard-decorators/or-guards.decorator';
import { UserJwtAuthGuard } from '../auth/user-auth/guards/user-jwt-auth.guard';
import { Action, CheckAbilities } from '../ability';
import { JwtUserPayload } from '../auth/user-auth/custom-dto/jwt-user-payload';
import { JwtEmployeePayload } from '../auth/employee-auth/custom-dto/jwt-employee-payload';
import { CurrentEntity } from 'src/common/decorators/jwt-decorators/current-entity.decorator';
import { PureAbility } from '@casl/ability';
import { CurrentAbility } from 'src/common/decorators/jwt-decorators/current-ability.decorator';

@Resolver(() => WorkshopJob)
export class WorkshopJobResolver {
  constructor(private readonly workshopJobService: WorkshopJobService) {}

  //ADMIN, USER(Owner), EMPLOYEE
  @CheckAbilities({ action: Action.Create, subject: 'WorkshopJob' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => WorkshopJob)
  async createWorkshopJob(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: CreateOneWorkshopJobArgs,
  ): Promise<WorkshopJob> {
    return this.workshopJobService.create(currentEntity, args);
  }

  //PUBLIC
  @Public()
  @CheckAbilities({ action: Action.Read, subject: 'WorkshopJob' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => WorkshopJob)
  async workshopJob(
    @Args() args: FindUniqueWorkshopJobArgs,
  ): Promise<WorkshopJob> {
    return this.workshopJobService.findOne(args);
  }

  //PUBLIC
  @Public()
  @CheckAbilities({ action: Action.Read, subject: 'WorkshopJob' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => [WorkshopJob])
  async workshopJobs(
    @Args() args: FindManyWorkshopJobArgs,
  ): Promise<WorkshopJob[]> {
    return this.workshopJobService.findMany(args);
  }

  //ADMIN, USER(Owner), EMPLOYEE
  @CheckAbilities({ action: Action.Update, subject: 'WorkshopJob' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => WorkshopJob)
  async updateWorkshopJob(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: UpdateOneWorkshopJobArgs,
  ): Promise<WorkshopJob> {
    return this.workshopJobService.update(currentEntity, args);
  }

  //ADMIN, USER(Owner), EMPLOYEE
  @CheckAbilities({ action: Action.Delete, subject: 'WorkshopJob' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Boolean)
  async deleteWorkshopJob(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: DeleteOneWorkshopJobArgs,
  ): Promise<boolean> {
    return this.workshopJobService.delete(currentEntity, args);
  }

  //ADMIN, USER(Owner), EMPLOYEE
  @CheckAbilities({ action: Action.Delete, subject: 'WorkshopJob' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Boolean)
  async deleteManyWorkshopJob(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: DeleteManyWorkshopJobArgs,
  ): Promise<boolean> {
    return this.workshopJobService.deleteMany(currentEntity, args);
  }

  // RESOLVE FIELDS

  //ADMIN, USER(Owner), EMPLOYEE
  @CheckAbilities({ action: Action.Read, subject: 'Task' })
  @ResolveField(() => [Task])
  async tasks(
    @CurrentAbility() ability: PureAbility,
    @Parent() workshopJob: WorkshopJob,
  ): Promise<Task[]> {
    return this.workshopJobService.tasks(ability, workshopJob.jobId);
  }

  //PUBLIC
  @Public()
  @ResolveField(() => Job)
  async job(
    @CurrentAbility() ability: PureAbility,
    @Parent() workshopJob: WorkshopJob,
  ): Promise<Job> {
    return this.workshopJobService.job(ability, workshopJob.jobId);
  }

  //PUBLIC
  @Public()
  @ResolveField(() => Workshop)
  async workshop(
    @CurrentAbility() ability: PureAbility,
    @Parent() workshopJob: WorkshopJob,
  ): Promise<Workshop> {
    return this.workshopJobService.workshop(ability, workshopJob.jobId);
  }

  //ADMIN, USER(Owner), EMPLOYEE
  @ResolveField(() => WorkshopJobCount)
  async _count(
    @CurrentAbility() ability: PureAbility,
    @Parent() workshopJob: WorkshopJob,
  ): Promise<WorkshopJobCount> {
    return this.workshopJobService.resolveCount(ability, workshopJob.jobId);
  }
}
