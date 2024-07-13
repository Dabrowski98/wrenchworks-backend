import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateWorkshopJobInput {
  @Field()
  workshopJobId: bigint;

  @Field({ nullable: true })
  workshopDescription?: string;

  @Field({ nullable: true })
  minPrice?: number;

  @Field({ nullable: true })
  maxPrice?: number;

  @Field({ nullable: true })
  price?: number;

  @Field({ nullable: true })
  availability?: boolean;
}
