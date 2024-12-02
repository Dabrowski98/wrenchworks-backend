import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { ReviewResponseWhereInput } from './review-response-where.input';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { BigIntNullableFilter } from '../../prisma/dto/big-int-nullable-filter.input';
import { StringFilter } from '../../prisma/dto/string-filter.input';
import { StringNullableFilter } from '../../prisma/dto/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../../prisma/dto/date-time-nullable-filter.input';
import { HideField } from '@nestjs/graphql';
import { EnumReviewsResponsesStatusFilter } from '../../prisma/dto/enum-reviews-responses-status-filter.input';
import { ReviewResponseNullableRelationFilter } from './review-response-nullable-relation-filter.input';
import { Type } from 'class-transformer';
import { ReviewResponseListRelationFilter } from './review-response-list-relation-filter.input';
import { ReviewRelationFilter } from '../../review/dto/review-relation-filter.input';
import { ValidateNested } from 'class-validator';
import { UserRelationFilter } from '../../user/dto/user-relation-filter.input';

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

    @Field(() => StringNullableFilter, {nullable:true})
    originalResponseText?: StringNullableFilter;

    @Field(() => EnumReviewsResponsesStatusFilter, {nullable:true})
    status?: EnumReviewsResponsesStatusFilter;

    @Field(() => ReviewResponseNullableRelationFilter, {nullable:true})
    @Type(() => ReviewResponseNullableRelationFilter)
    parentResponse?: ReviewResponseNullableRelationFilter;

    @Field(() => ReviewResponseListRelationFilter, {nullable:true})
    @Type(() => ReviewResponseListRelationFilter)
    childrenResponses?: ReviewResponseListRelationFilter;

    @Field(() => ReviewRelationFilter, {nullable:true})
    @Type(() => ReviewRelationFilter)
    @ValidateNested()
    @Type(() => ReviewRelationFilter)
    review?: ReviewRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    @Type(() => UserRelationFilter)
    user?: UserRelationFilter;
}