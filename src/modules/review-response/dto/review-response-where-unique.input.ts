import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { ReviewResponseWhereInput } from './review-response-where.input';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { BigIntNullableFilter } from '../prisma/big-int-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumReviewsResponsesStatusFilter } from '../prisma/enum-reviews-responses-status-filter.input';
import { ReviewResponseNullableRelationFilter } from './review-response-nullable-relation-filter.input';
import { Type } from 'class-transformer';
import { ReviewResponseListRelationFilter } from './review-response-list-relation-filter.input';
import { ReviewRelationFilter } from '../review/review-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class ReviewResponseWhereUniqueInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    reviewResponseId?: bigint | number;

    @Field(() => [ReviewResponseWhereInput], {nullable:true})
    AND?: Array<ReviewResponseWhereInput>;

    @Field(() => [ReviewResponseWhereInput], {nullable:true})
    OR?: Array<ReviewResponseWhereInput>;

    @Field(() => [ReviewResponseWhereInput], {nullable:true})
    NOT?: Array<ReviewResponseWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    reviewId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    userId?: BigIntFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    parentResponseId?: BigIntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    responseText?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    responseDate?: DateTimeFilter;

    @Field(() => EnumReviewsResponsesStatusFilter, {nullable:true})
    status?: EnumReviewsResponsesStatusFilter;

    @Field(() => ReviewResponseNullableRelationFilter, {nullable:true})
    @Type(() => ReviewResponseNullableRelationFilter)
    reviewResponse?: ReviewResponseNullableRelationFilter;

    @Field(() => ReviewResponseListRelationFilter, {nullable:true})
    @Type(() => ReviewResponseListRelationFilter)
    otherReviewResponses?: ReviewResponseListRelationFilter;

    @Field(() => ReviewRelationFilter, {nullable:true})
    @Type(() => ReviewRelationFilter)
    review?: ReviewRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    @Type(() => UserRelationFilter)
    user?: UserRelationFilter;
}
