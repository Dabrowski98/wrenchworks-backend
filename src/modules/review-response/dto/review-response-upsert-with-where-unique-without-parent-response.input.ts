import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewResponseWhereUniqueInput } from './review-response-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewResponseUpdateWithoutParentResponseInput } from './review-response-update-without-parent-response.input';
import { ValidateNested } from 'class-validator';
import { ReviewResponseCreateWithoutParentResponseInput } from './review-response-create-without-parent-response.input';

@InputType()
export class ReviewResponseUpsertWithWhereUniqueWithoutParentResponseInput {

    @Field(() => ReviewResponseWhereUniqueInput, {nullable:false})
    @Type(() => ReviewResponseWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewResponseWhereUniqueInput, 'reviewResponseId'>;

    @Field(() => ReviewResponseUpdateWithoutParentResponseInput, {nullable:false})
    @Type(() => ReviewResponseUpdateWithoutParentResponseInput)
    @ValidateNested()
    update!: ReviewResponseUpdateWithoutParentResponseInput;

    @Field(() => ReviewResponseCreateWithoutParentResponseInput, {nullable:false})
    @Type(() => ReviewResponseCreateWithoutParentResponseInput)
    @ValidateNested()
    create!: ReviewResponseCreateWithoutParentResponseInput;
}
