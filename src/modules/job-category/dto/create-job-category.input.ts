import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateJobCategoryInput {
  @Field(() => String)
  @IsNotEmpty()
  name: string;

  @Field(() => BigInt, { nullable: true })
  @IsOptional()
  parentId?: bigint;

  @Field(() => String, { nullable: true })
  @IsOptional()
  description?: string;

  @Field(() => Boolean)
  @IsOptional()
  isPopular?: boolean;
}
