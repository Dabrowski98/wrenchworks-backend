import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { BigIntNullableFilter } from '../../prisma/dto/big-int-nullable-filter.input';
import { StringFilter } from '../../prisma/dto/string-filter.input';
import { DateTimeFilter } from '../../prisma/dto/date-time-filter.input';
import { EnumReviewsResponsesStatusFilter } from '../../prisma/dto/enum-reviews-responses-status-filter.input';

@InputType()
export class ReviewResponseScalarWhereInput {

    @Field(() => [ReviewResponseScalarWhereInput], {nullable:true})
    AND?: Array<ReviewResponseScalarWhereInput>;

    @Field(() => [ReviewResponseScalarWhereInput], {nullable:true})
    OR?: Array<ReviewResponseScalarWhereInput>;

    @Field(() => [ReviewResponseScalarWhereInput], {nullable:true})
    NOT?: Array<ReviewResponseScalarWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    reviewResponseId?: BigIntFilter;

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
}