import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateWorkshopJobCategoryInput {
  @Field(() => BigInt)
  workshopId: bigint;

  @Field(() => BigInt)
  categoryId: bigint;
}
