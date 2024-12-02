import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../../prisma/dto/big-int-with-aggregates-filter.input';
import { BigIntNullableWithAggregatesFilter } from '../../prisma/dto/big-int-nullable-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../../prisma/dto/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../../prisma/dto/string-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../../prisma/dto/date-time-nullable-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';
import { EnumReviewsResponsesStatusWithAggregatesFilter } from '../../prisma/dto/enum-reviews-responses-status-with-aggregates-filter.input';

@InputType()
export class ReviewResponseScalarWhereWithAggregatesInput {

    @Field(() => [ReviewResponseScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ReviewResponseScalarWhereWithAggregatesInput>;

    @Field(() => [ReviewResponseScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ReviewResponseScalarWhereWithAggregatesInput>;

    @Field(() => [ReviewResponseScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ReviewResponseScalarWhereWithAggregatesInput>;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    reviewResponseId?: BigIntWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    reviewId?: BigIntWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    userId?: BigIntWithAggregatesFilter;

    @Field(() => BigIntNullableWithAggregatesFilter, {nullable:true})
    parentResponseId?: BigIntNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    responseText?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    originalResponseText?: StringNullableWithAggregatesFilter;

    @Field(() => EnumReviewsResponsesStatusWithAggregatesFilter, {nullable:true})
    status?: EnumReviewsResponsesStatusWithAggregatesFilter;
}