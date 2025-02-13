import { Field, Float } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskStatus } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
import { Type } from 'class-transformer';
import { Transform } from 'class-transformer';
import * as Validator from 'class-validator';
import { GraphQLBigInt } from 'graphql-scalars';
import {
  GraphQLDecimal,
  transformToDecimal,
} from 'prisma-graphql-type-decimal';
import { CREATE, UPDATE } from 'src/common/constants/validation-groups';

@InputType()
export class EditOneTaskInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString({ message: 'Custom name must be a string' })
  @Validator.Length(2, 50, {
    message: 'Custom name must be between 2 and 50 characters',
  })
  @Validator.IsOptional()
  customName?: string;

  @Field(() => String, { nullable: true })
  @Validator.IsString({ message: 'Description must be a string' })
  @Validator.Length(0, 2500, {
    message: 'Description cannot exceed 2500 characters',
  })
  @Validator.IsOptional()
  description?: string;

  @Field(() => Float, { nullable: true })
  @Validator.IsNumber({}, { message: 'Execution time must be a number' })
  @Validator.Min(0, { message: 'Execution time cannot be negative' })
  @Validator.Max(9999.99, {
    message: 'Whoa Cowboy! Execution time cannot exceed 9999.99!',
  })
  @Validator.IsOptional()
  executionTime?: number;

  @Field(() => GraphQLDecimal, { nullable: true })
  @Type(() => Object)
  @Transform(transformToDecimal)
  @Validator.IsNumber({}, { message: 'Parts cost must be a number' })
  @Validator.Min(0, { message: 'Parts cost cannot be negative' })
  @Validator.Max(9999999.99, { message: 'Parts cost cannot exceed 9999999.99' })
  @Validator.IsOptional()
  partsCost?: Decimal;
}
