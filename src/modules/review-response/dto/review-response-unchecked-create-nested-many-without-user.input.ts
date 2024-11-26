import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewResponseCreateWithoutUserInput } from './review-response-create-without-user.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ReviewResponseCreateOrConnectWithoutUserInput } from './review-response-create-or-connect-without-user.input';
import { ReviewResponseCreateManyUserInputEnvelope } from './review-response-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReviewResponseWhereUniqueInput } from './review-response-where-unique.input';

@InputType()
export class ReviewResponseUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [ReviewResponseCreateWithoutUserInput], {nullable:true})
    @Type(() => ReviewResponseCreateWithoutUserInput)
    @ValidateNested()
    create?: Array<ReviewResponseCreateWithoutUserInput>;

    @Field(() => [ReviewResponseCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ReviewResponseCreateOrConnectWithoutUserInput)
    @ValidateNested()
    connectOrCreate?: Array<ReviewResponseCreateOrConnectWithoutUserInput>;

    @Field(() => ReviewResponseCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ReviewResponseCreateManyUserInputEnvelope)
    @ValidateNested()
    createMany?: ReviewResponseCreateManyUserInputEnvelope;

    @Field(() => [ReviewResponseWhereUniqueInput], {nullable:true})
    @Type(() => ReviewResponseWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<ReviewResponseWhereUniqueInput, 'reviewResponseId'>>;
}
