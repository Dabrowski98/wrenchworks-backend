import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewResponseWhereUniqueInput } from './review-response-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewResponseCreateWithoutChildrenResponsesInput } from './review-response-create-without-children-responses.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class ReviewResponseCreateOrConnectWithoutChildrenResponsesInput {

    @Field(() => ReviewResponseWhereUniqueInput, {nullable:false})
    @Type(() => ReviewResponseWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewResponseWhereUniqueInput, 'reviewResponseId'>;

    @Field(() => ReviewResponseCreateWithoutChildrenResponsesInput, {nullable:false})
    @Type(() => ReviewResponseCreateWithoutChildrenResponsesInput)
    @ValidateNested()
    create!: ReviewResponseCreateWithoutChildrenResponsesInput;
}
