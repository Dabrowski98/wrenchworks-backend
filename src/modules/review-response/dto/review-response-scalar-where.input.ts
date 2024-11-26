import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { BigIntNullableFilter } from '../../prisma/dto/big-int-nullable-filter.input';
import { StringFilter } from '../../prisma/dto/string-filter.input';
import { StringNullableFilter } from '../../prisma/dto/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../../prisma/dto/date-time-nullable-filter.input';
import { HideField } from 'nestjs-graphql';
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

    @Field(() => StringNullableFilter, {nullable:true})
    originalResponseText?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    @HideField()
    createdAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    @HideField()
    updatedAt?: DateTimeNullableFilter;

    @Field(() => EnumReviewsResponsesStatusFilter, {nullable:true})
    status?: EnumReviewsResponsesStatusFilter;
}
