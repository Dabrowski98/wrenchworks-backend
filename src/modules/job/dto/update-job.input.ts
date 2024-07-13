import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateJobInput {
  @Field(() => BigInt)
  jobId: bigint;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Boolean, { nullable: true })
  isPopular?: boolean;

  @Field(() => BigInt, { nullable: true })
  categoryId?: bigint;
}
