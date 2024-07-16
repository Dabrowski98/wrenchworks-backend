import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateJobInput {
  @Field(() => BigInt)
  categoryId: bigint;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Boolean, { defaultValue: false })
  isPopular?: boolean;
}
