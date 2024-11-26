import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewResponseCreateWithoutChildrenResponsesInput } from './review-response-create-without-children-responses.input';
import { HideField } from '@nestjs/graphql';
import { ReviewResponseCreateOrConnectWithoutChildrenResponsesInput } from './review-response-create-or-connect-without-children-responses.input';
import { Prisma } from '@prisma/client';
import { ReviewResponseWhereUniqueInput } from './review-response-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class ReviewResponseCreateNestedOneWithoutChildrenResponsesInput {

    @HideField()
    create?: ReviewResponseCreateWithoutChildrenResponsesInput;

    @HideField()
    connectOrCreate?: ReviewResponseCreateOrConnectWithoutChildrenResponsesInput;

    @Field(() => ReviewResponseWhereUniqueInput, {nullable:true})
    @Type(() => ReviewResponseWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<ReviewResponseWhereUniqueInput, 'reviewResponseId'>;
}
