import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateWithoutUserInput } from './review-create-without-user.input';
import { HideField } from '@nestjs/graphql';
import { ReviewCreateOrConnectWithoutUserInput } from './review-create-or-connect-without-user.input';
import { ReviewCreateManyUserInputEnvelope } from './review-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class ReviewCreateNestedManyWithoutUserInput {

    @HideField()
    create?: Array<ReviewCreateWithoutUserInput>;

    @HideField()
    connectOrCreate?: Array<ReviewCreateOrConnectWithoutUserInput>;

    @HideField()
    createMany?: ReviewCreateManyUserInputEnvelope;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'reviewId'>>;
}
