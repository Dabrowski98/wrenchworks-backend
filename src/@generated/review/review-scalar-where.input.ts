import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumReviewsStatusFilter } from '../prisma/enum-reviews-status-filter.input';

@InputType()
export class ReviewScalarWhereInput {

    @Field(() => [ReviewScalarWhereInput], {nullable:true})
    @Type(() => ReviewScalarWhereInput)
    AND?: Array<ReviewScalarWhereInput>;

    @Field(() => [ReviewScalarWhereInput], {nullable:true})
    @Type(() => ReviewScalarWhereInput)
    OR?: Array<ReviewScalarWhereInput>;

    @Field(() => [ReviewScalarWhereInput], {nullable:true})
    @Type(() => ReviewScalarWhereInput)
    NOT?: Array<ReviewScalarWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    reviewId?: BigIntFilter;

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
}
