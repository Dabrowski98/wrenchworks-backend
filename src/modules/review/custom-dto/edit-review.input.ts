import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import * as Validator from 'class-validator';

@InputType()
export class EditReviewInput {
  @Field(() => GraphQLDecimal, { nullable: true })
  @Type(() => Object)
  @Transform(transformToDecimal)
  @Validator.IsNumber({}, { message: 'Rating must be a number' })
  @Validator.Min(0, { message: 'Rating cannot be negative' })
  @Validator.Max(5, { message: 'Rating cannot exceed 5' })
  @Validator.IsOptional()
  rating?: Decimal;

  @Field(() => String, { nullable: true })
  @Validator.IsString({ message: 'Review text must be a string' })
  @Validator.Length(0, 10000, {
    message: 'Review text cannot exceed 10000 characters',
  })
  @Validator.IsNotEmpty()
  reviewText?: string;
}
