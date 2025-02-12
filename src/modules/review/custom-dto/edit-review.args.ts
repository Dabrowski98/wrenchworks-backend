import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from '../dto/review-where-unique.input';
import { EditReviewInput } from './edit-review.input';

@ArgsType()
export class EditReviewArgs {

    @Field(() => EditReviewInput, {nullable:false})
    @Type(() => EditReviewInput)
    @ValidateNested()
    data!: EditReviewInput;

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'reviewId'>;
}
