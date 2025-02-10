import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewResponseCreateWithoutUserInput } from './review-response-create-without-user.input';
import { HideField } from '@nestjs/graphql';
import { ReviewResponseCreateOrConnectWithoutUserInput } from './review-response-create-or-connect-without-user.input';
import { ReviewResponseCreateManyUserInputEnvelope } from './review-response-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReviewResponseWhereUniqueInput } from './review-response-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class ReviewResponseCreateNestedManyWithoutUserInput {

    @HideField()
    create?: Array<ReviewResponseCreateWithoutUserInput>;

    @HideField()
    connectOrCreate?: Array<ReviewResponseCreateOrConnectWithoutUserInput>;

    @HideField()
    createMany?: ReviewResponseCreateManyUserInputEnvelope;

    @Field(() => [ReviewResponseWhereUniqueInput], {nullable:true})
    @Type(() => ReviewResponseWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<ReviewResponseWhereUniqueInput, 'reviewResponseId'>>;
}
