import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewResponseWhereUniqueInput } from './review-response-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewResponseCreateWithoutParentResponseInput } from './review-response-create-without-parent-response.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class ReviewResponseCreateOrConnectWithoutParentResponseInput {

    @Field(() => ReviewResponseWhereUniqueInput, {nullable:false})
    @Type(() => ReviewResponseWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewResponseWhereUniqueInput, 'reviewResponseId'>;

    @Field(() => ReviewResponseCreateWithoutParentResponseInput, {nullable:false})
    @Type(() => ReviewResponseCreateWithoutParentResponseInput)
    @ValidateNested()
    create!: ReviewResponseCreateWithoutParentResponseInput;
}
