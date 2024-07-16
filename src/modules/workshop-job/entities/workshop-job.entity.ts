import { ObjectType, Field } from '@nestjs/graphql';
import { Workshop } from '../../workshop/entities/workshop.entity';
import { Job } from '../../job/entities/job.entity';

@ObjectType()
export class WorkshopJob {
  @Field(() => BigInt)
  workshopJobId: bigint;

  @Field(() => BigInt)
  workshopId: bigint;

  @Field(() => BigInt)
  jobId: bigint;

  @Field({ nullable: true })
  workshopDescription?: string;

  @Field({ nullable: true })
  minPrice?: number;

  @Field({ nullable: true })
  maxPrice?: number;

  @Field({ nullable: true })
  price?: number;

  @Field()
  availability: boolean;

  @Field(() => Job)
  job: Job;

  @Field(() => Workshop)
  workshop: Workshop;
}
