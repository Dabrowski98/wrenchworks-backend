import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateWorkshopJobInput {
  @Field()
  workshopId: bigint;

  @Field()
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
}
