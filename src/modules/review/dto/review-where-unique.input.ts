import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { ReviewWhereInput } from './review-where.input';
import { Type } from 'class-transformer';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { DecimalFilter } from '../../prisma/dto/decimal-filter.input';
import { DecimalNullableFilter } from '../../prisma/dto/decimal-nullable-filter.input';
import { StringFilter } from '../../prisma/dto/string-filter.input';
import { StringNullableFilter } from '../../prisma/dto/string-nullable-filter.input';
import { DateTimeFilter } from '../../prisma/dto/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeNullableFilter } from '../../prisma/dto/date-time-nullable-filter.input';
import { EnumReviewsStatusFilter } from '../../prisma/dto/enum-reviews-status-filter.input';
import { UserRelationFilter } from '../../user/dto/user-relation-filter.input';
import { WorkshopRelationFilter } from '../../workshop/dto/workshop-relation-filter.input';
import { ValidateNested } from 'class-validator';
import { ReviewResponseListRelationFilter } from '../../review-response/dto/review-response-list-relation-filter.input';

@InputType()
export class ReviewWhereUniqueInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    reviewId?: bigint | number;

    @Field(() => [ReviewWhereInput], {nullable:true})
    @Type(() => ReviewWhereInput)
    AND?: Array<ReviewWhereInput>;

    @Field(() => [ReviewWhereInput], {nullable:true})
    @Type(() => ReviewWhereInput)
    OR?: Array<ReviewWhereInput>;

    @Field(() => [ReviewWhereInput], {nullable:true})
    @Type(() => ReviewWhereInput)
    NOT?: Array<ReviewWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    userId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    workshopId?: BigIntFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    rating?: DecimalFilter;

    @Field(() => DecimalNullableFilter, {nullable:true})
    @Type(() => DecimalNullableFilter)
    originalRating?: DecimalNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    reviewText?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    originalReviewText?: StringNullableFilter;

    @Field(() => EnumReviewsStatusFilter, {nullable:true})
    status?: EnumReviewsStatusFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    @Type(() => UserRelationFilter)
    user?: UserRelationFilter;

    @Field(() => WorkshopRelationFilter, {nullable:true})
    @Type(() => WorkshopRelationFilter)
    @ValidateNested()
    @Type(() => WorkshopRelationFilter)
    workshop?: WorkshopRelationFilter;

    @Field(() => ReviewResponseListRelationFilter, {nullable:true})
    @Type(() => ReviewResponseListRelationFilter)
    @ValidateNested()
    @Type(() => ReviewResponseListRelationFilter)
    reviewResponses?: ReviewResponseListRelationFilter;
}