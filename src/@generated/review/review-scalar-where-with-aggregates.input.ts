import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { BigIntWithAggregatesFilter } from '../prisma/big-int-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumReviewsStatusWithAggregatesFilter } from '../prisma/enum-reviews-status-with-aggregates-filter.input';

@InputType()
export class ReviewScalarWhereWithAggregatesInput {

    @Field(() => [ReviewScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => ReviewScalarWhereWithAggregatesInput)
    AND?: Array<ReviewScalarWhereWithAggregatesInput>;

    @Field(() => [ReviewScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => ReviewScalarWhereWithAggregatesInput)
    OR?: Array<ReviewScalarWhereWithAggregatesInput>;

    @Field(() => [ReviewScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => ReviewScalarWhereWithAggregatesInput)
    NOT?: Array<ReviewScalarWhereWithAggregatesInput>;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    reviewId?: BigIntWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    userId?: BigIntWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    workshopId?: BigIntWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    rating?: DecimalWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    reviewText?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    reviewDate?: DateTimeWithAggregatesFilter;

    @Field(() => EnumReviewsStatusWithAggregatesFilter, {nullable:true})
    status?: EnumReviewsStatusWithAggregatesFilter;
}
