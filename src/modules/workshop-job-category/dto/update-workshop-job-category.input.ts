import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateWorkshopJobCategoryInput {
  @Field(() => BigInt)
  workshopId: bigint;

  @Field(() => BigInt)
  categoryId: bigint;
}
