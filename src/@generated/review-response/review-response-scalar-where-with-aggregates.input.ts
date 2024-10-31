import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../prisma/big-int-with-aggregates-filter.input';
import { BigIntNullableWithAggregatesFilter } from '../prisma/big-int-nullable-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumReviewsResponsesStatusWithAggregatesFilter } from '../prisma/enum-reviews-responses-status-with-aggregates-filter.input';

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

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    responseDate?: DateTimeWithAggregatesFilter;

    @Field(() => EnumReviewsResponsesStatusWithAggregatesFilter, {nullable:true})
    status?: EnumReviewsResponsesStatusWithAggregatesFilter;
}
