import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewResponseCreateWithoutUserInput } from './review-response-create-without-user.input';
import { Type } from 'class-transformer';
import { ReviewResponseCreateOrConnectWithoutUserInput } from './review-response-create-or-connect-without-user.input';
import { ReviewResponseUpsertWithWhereUniqueWithoutUserInput } from './review-response-upsert-with-where-unique-without-user.input';
import { ReviewResponseCreateManyUserInputEnvelope } from './review-response-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReviewResponseWhereUniqueInput } from './review-response-where-unique.input';
import { ReviewResponseUpdateWithWhereUniqueWithoutUserInput } from './review-response-update-with-where-unique-without-user.input';
import { ReviewResponseUpdateManyWithWhereWithoutUserInput } from './review-response-update-many-with-where-without-user.input';
import { ReviewResponseScalarWhereInput } from './review-response-scalar-where.input';

@InputType()
export class ReviewResponseUpdateManyWithoutUserNestedInput {

    @Field(() => [ReviewResponseCreateWithoutUserInput], {nullable:true})
    @Type(() => ReviewResponseCreateWithoutUserInput)
    create?: Array<ReviewResponseCreateWithoutUserInput>;

    @Field(() => [ReviewResponseCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ReviewResponseCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ReviewResponseCreateOrConnectWithoutUserInput>;

    @Field(() => [ReviewResponseUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ReviewResponseUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<ReviewResponseUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ReviewResponseCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ReviewResponseCreateManyUserInputEnvelope)
    createMany?: ReviewResponseCreateManyUserInputEnvelope;

    @Field(() => [ReviewResponseWhereUniqueInput], {nullable:true})
    @Type(() => ReviewResponseWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ReviewResponseWhereUniqueInput, 'reviewResponseId'>>;

    @Field(() => [ReviewResponseWhereUniqueInput], {nullable:true})
    @Type(() => ReviewResponseWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ReviewResponseWhereUniqueInput, 'reviewResponseId'>>;

    @Field(() => [ReviewResponseWhereUniqueInput], {nullable:true})
    @Type(() => ReviewResponseWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ReviewResponseWhereUniqueInput, 'reviewResponseId'>>;

    @Field(() => [ReviewResponseWhereUniqueInput], {nullable:true})
    @Type(() => ReviewResponseWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReviewResponseWhereUniqueInput, 'reviewResponseId'>>;

    @Field(() => [ReviewResponseUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ReviewResponseUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<ReviewResponseUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ReviewResponseUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => ReviewResponseUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<ReviewResponseUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ReviewResponseScalarWhereInput], {nullable:true})
    @Type(() => ReviewResponseScalarWhereInput)
    deleteMany?: Array<ReviewResponseScalarWhereInput>;
}