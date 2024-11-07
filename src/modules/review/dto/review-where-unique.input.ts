import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { ReviewWhereInput } from './review-where.input';
import { Type } from 'class-transformer';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumReviewsStatusFilter } from '../prisma/enum-reviews-status-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { WorkshopRelationFilter } from '../workshop/workshop-relation-filter.input';
import { ReviewResponseListRelationFilter } from '../review-response/review-response-list-relation-filter.input';

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

    @Field(() => StringFilter, {nullable:true})
    reviewText?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    reviewDate?: DateTimeFilter;

    @Field(() => EnumReviewsStatusFilter, {nullable:true})
    status?: EnumReviewsStatusFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    @Type(() => UserRelationFilter)
    user?: UserRelationFilter;

    @Field(() => WorkshopRelationFilter, {nullable:true})
    @Type(() => WorkshopRelationFilter)
    workshop?: WorkshopRelationFilter;

    @Field(() => ReviewResponseListRelationFilter, {nullable:true})
    @Type(() => ReviewResponseListRelationFilter)
    reviewResponses?: ReviewResponseListRelationFilter;
}
