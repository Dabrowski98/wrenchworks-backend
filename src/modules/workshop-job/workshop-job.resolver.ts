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
} from './dto';
import { Workshop } from '../workshop/dto';
import { Task } from '../task/dto';
import { Job } from '../job/dto';

@Resolver(() => WorkshopJob)
export class WorkshopJobResolver {
  constructor(private readonly workshopJobService: WorkshopJobService) {}

  @Mutation(() => WorkshopJob)
  async createWorkshopJob(
    @Args() args: CreateOneWorkshopJobArgs,
  ): Promise<WorkshopJob> {
    return this.workshopJobService.create(args);
  }

  @Query(() => WorkshopJob)
  async workshopJob(
    @Args() args: FindUniqueWorkshopJobArgs,
  ): Promise<WorkshopJob> {
    return this.workshopJobService.findOne(args);
  }

  @Query(() => [WorkshopJob])
  async workshopJobs(
    @Args() args: FindManyWorkshopJobArgs,
  ): Promise<WorkshopJob[]> {
    return this.workshopJobService.findMany(args);
  }

  @Mutation(() => WorkshopJob)
  async updateWorkshopJob(
    @Args() args: UpdateOneWorkshopJobArgs,
  ): Promise<WorkshopJob> {
    return this.workshopJobService.update(args);
  }

  @Mutation(() => Boolean)
  async deleteWorkshopJob(
    @Args() args: DeleteOneWorkshopJobArgs,
  ): Promise<boolean> {
    return this.workshopJobService.delete(args);
  }

  // RESOLVE FIELDS

  @ResolveField(() => [Task])
  async tasks(@Parent() workshopJob: WorkshopJob): Promise<Task[]> {
    return this.workshopJobService.tasks(workshopJob.jobId);
  }

  @ResolveField(() => Job)
  async job(@Parent() workshopJob: WorkshopJob): Promise<Job> {
    return this.workshopJobService.job(workshopJob.jobId);
  }

  @ResolveField(() => Workshop)
  async workshop(@Parent() workshopJob: WorkshopJob): Promise<Workshop> {
    return this.workshopJobService.workshop(workshopJob.jobId);
  }

  @ResolveField(() => WorkshopJobCount)
  async _count(@Parent() workshopJob: WorkshopJob): Promise<WorkshopJobCount> {
    return this.workshopJobService.resolveCount(workshopJob.jobId);
  }
}
