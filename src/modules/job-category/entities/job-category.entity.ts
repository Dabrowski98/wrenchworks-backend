import { ObjectType, Field } from '@nestjs/graphql';
import { Job } from '../../job/entities/job.entity';
import { WorkshopJobCategory } from '../../workshop-job-category/entities/workshop-job-category.entity';

@ObjectType()
export class JobCategory {
  @Field(() => BigInt)
  categoryId: bigint;

  @Field(() => String)
  name: string;

  @Field(() => BigInt, { nullable: true })
  parentId?: bigint;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Boolean)
  isPopular: boolean;

  // Relations
  // @Field(() => JobCategory, { nullable: true })
  // child?: JobCategory;

  // @Field(() => [JobCategory])
  // children?: JobCategory[];

  // @Field(() => [Job])
  // jobs?: Job[];

  // @Field(() => [WorkshopJobCategory])
  // jobCategoryWorkshops?: WorkshopJobCategory[];
}
