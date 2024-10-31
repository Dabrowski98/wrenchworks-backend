import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewResponseWhereUniqueInput } from './review-response-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewResponseUpdateWithoutUserInput } from './review-response-update-without-user.input';
import { ReviewResponseCreateWithoutUserInput } from './review-response-create-without-user.input';

@InputType()
export class ReviewResponseUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => ReviewResponseWhereUniqueInput, {nullable:false})
    @Type(() => ReviewResponseWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewResponseWhereUniqueInput, 'reviewResponseId'>;

    @Field(() => ReviewResponseUpdateWithoutUserInput, {nullable:false})
    @Type(() => ReviewResponseUpdateWithoutUserInput)
    update!: ReviewResponseUpdateWithoutUserInput;

    @Field(() => ReviewResponseCreateWithoutUserInput, {nullable:false})
    @Type(() => ReviewResponseCreateWithoutUserInput)
    create!: ReviewResponseCreateWithoutUserInput;
}
