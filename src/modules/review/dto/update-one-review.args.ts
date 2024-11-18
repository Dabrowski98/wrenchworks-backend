import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewUpdateInput } from './review-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import * as Validator from 'class-validator';

@ArgsType()
export class UpdateOneReviewArgs {

    @Field(() => ReviewUpdateInput, {nullable:false})
    @Type(() => ReviewUpdateInput)
    @Validator.ValidateNested()
    data!: ReviewUpdateInput;

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    @Validator.Allow()
    where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'reviewId'>;
}
