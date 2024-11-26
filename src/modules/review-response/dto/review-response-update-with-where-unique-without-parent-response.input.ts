import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewResponseWhereUniqueInput } from './review-response-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewResponseUpdateWithoutParentResponseInput } from './review-response-update-without-parent-response.input';

@InputType()
export class ReviewResponseUpdateWithWhereUniqueWithoutParentResponseInput {

    @Field(() => ReviewResponseWhereUniqueInput, {nullable:false})
    @Type(() => ReviewResponseWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewResponseWhereUniqueInput, 'reviewResponseId'>;

    @Field(() => ReviewResponseUpdateWithoutParentResponseInput, {nullable:false})
    @Type(() => ReviewResponseUpdateWithoutParentResponseInput)
    data!: ReviewResponseUpdateWithoutParentResponseInput;
}
