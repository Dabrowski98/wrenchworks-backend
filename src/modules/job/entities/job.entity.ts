import { ObjectType, Field, ID } from '@nestjs/graphql';
import { JobCategory } from '../../job-category/entities/job-category.entity';
// import { ServiceRequestJob } from '../service-request-job/service-request-job.entity';
// import { WorkshopJob } from '../workshop-job/workshop-job.entity';

@ObjectType()
export class Job {
  @Field(() => BigInt)
  jobId: bigint;

  @Field(() => BigInt)
  categoryId: bigint;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  isPopular: boolean;

  @Field(() => JobCategory)
  jobCategory: JobCategory;

  // @Field(() => [ServiceRequestJob], { nullable: true })
  // jobServiceRequests?: ServiceRequestJob[];

  // @Field(() => [WorkshopJob], { nullable: true })
  // jobWorkshops?: WorkshopJob[];
}
