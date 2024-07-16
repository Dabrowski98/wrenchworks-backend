import { InputType, Field, Float } from '@nestjs/graphql';
import { IsOptional, IsString, IsNumber } from 'class-validator';

@InputType()
export class UpdateTaskInput {
  @Field(() => BigInt, { nullable: true })
  @IsOptional()
  jobId?: bigint;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  customName?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  description?: string;

  @Field(() => Float, { nullable: true })
  @IsOptional()
  @IsNumber()
  executionTime?: number;

  @Field(() => Float, { nullable: true })
  @IsOptional()
  @IsNumber()
  partsCost?: number;
}
