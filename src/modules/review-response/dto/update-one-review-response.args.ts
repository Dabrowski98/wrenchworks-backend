import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewResponseUpdateInput } from './review-response-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ReviewResponseWhereUniqueInput } from './review-response-where-unique.input';

@ArgsType()
export class UpdateOneReviewResponseArgs {

    @Field(() => ReviewResponseUpdateInput, {nullable:false})
    @Type(() => ReviewResponseUpdateInput)
    data!: ReviewResponseUpdateInput;

    @Field(() => ReviewResponseWhereUniqueInput, {nullable:false})
    @Type(() => ReviewResponseWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewResponseWhereUniqueInput, 'reviewResponseId'>;
}
