import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewResponseWhereUniqueInput } from './review-response-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewResponseCreateWithoutUserInput } from './review-response-create-without-user.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class ReviewResponseCreateOrConnectWithoutUserInput {

    @Field(() => ReviewResponseWhereUniqueInput, {nullable:false})
    @Type(() => ReviewResponseWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewResponseWhereUniqueInput, 'reviewResponseId'>;

    @Field(() => ReviewResponseCreateWithoutUserInput, {nullable:false})
    @Type(() => ReviewResponseCreateWithoutUserInput)
    @ValidateNested()
    create!: ReviewResponseCreateWithoutUserInput;
}
