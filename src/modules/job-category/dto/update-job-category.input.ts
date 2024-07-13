import { InputType, Field } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class UpdateJobCategoryInput {
  @Field(() => String, { nullable: true })
  @IsOptional()
  name?: string;

  @Field(() => BigInt, { nullable: true })
  @IsOptional()
  parentId?: bigint;

  @Field(() => String, { nullable: true })
  @IsOptional()
  description?: string;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  isPopular?: boolean;
}
