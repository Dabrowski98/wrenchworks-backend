import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewUpdateInput } from './review-update.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';

@ArgsType()
export class UpdateOneReviewArgs {

    @Field(() => ReviewUpdateInput, {nullable:false})
    @Type(() => ReviewUpdateInput)
    @ValidateNested()
    data!: ReviewUpdateInput;

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'reviewId'>;
}
