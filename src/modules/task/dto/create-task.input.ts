import { InputType, Field, Float } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsOptional, IsNumber } from 'class-validator';

@InputType()
export class CreateTaskInput {
  @Field(() => BigInt)
  @IsNotEmpty()
  serviceId: bigint;

  @Field(() => BigInt, { nullable: true })
  @IsOptional()
  jobId?: bigint;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  customName?: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  description: string;

  @Field(() => Float)
  @IsNotEmpty()
  @IsNumber()
  executionTime: number;

  @Field(() => Float)
  @IsNotEmpty()
  @IsNumber()
  partsCost: number;
}
