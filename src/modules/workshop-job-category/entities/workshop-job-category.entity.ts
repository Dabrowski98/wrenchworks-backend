import { ObjectType, Field } from '@nestjs/graphql';
import { JobCategory } from '../../job-category/entities/job-category.entity';
import { Workshop } from '../../workshop/entities/workshop.entity';

@ObjectType()
export class WorkshopJobCategory {
  @Field(() => BigInt)
  workshopId: bigint;

  @Field(() => BigInt)
  categoryId: bigint;

  @Field()
  createdAt: Date;

  @Field(() => JobCategory)
  jobCategory: JobCategory;

  @Field(() => Workshop)
  workshop: Workshop;
}
