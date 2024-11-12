import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewResponseWhereUniqueInput } from './review-response-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewResponseCreateInput } from './review-response-create.input';
import { ReviewResponseUpdateInput } from './review-response-update.input';

@ArgsType()
export class UpsertOneReviewResponseArgs {

    @Field(() => ReviewResponseWhereUniqueInput, {nullable:false})
    @Type(() => ReviewResponseWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewResponseWhereUniqueInput, 'reviewResponseId'>;

    @Field(() => ReviewResponseCreateInput, {nullable:false})
    @Type(() => ReviewResponseCreateInput)
    create!: ReviewResponseCreateInput;

    @Field(() => ReviewResponseUpdateInput, {nullable:false})
    @Type(() => ReviewResponseUpdateInput)
    update!: ReviewResponseUpdateInput;
}
