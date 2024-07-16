import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { WorkshopJob } from './entities/workshop-job.entity';
import { WorkshopJobService } from './workshop-job.service';
import { CreateWorkshopJobInput, UpdateWorkshopJobInput } from './dto/index';

@Resolver(() => WorkshopJob)
export class WorkshopJobResolver {
  constructor(private readonly workshopJobService: WorkshopJobService) {}

  @Mutation(() => WorkshopJob)
  async createWorkshopJob(@Args('data') data: CreateWorkshopJobInput) {
    return this.workshopJobService.createWorkshopJob(data);
  }

  @Mutation(() => WorkshopJob)
  async updateWorkshopJob(@Args('data') data: UpdateWorkshopJobInput) {
    return this.workshopJobService.updateWorkshopJob(data);
  }

  @Query(() => WorkshopJob, { nullable: true })
  async workshopJob(@Args('workshopJobId') workshopJobId: bigint) {
    return this.workshopJobService.findWorkshopJobById(workshopJobId);
  }
}
