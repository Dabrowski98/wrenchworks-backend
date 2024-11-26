import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateWithoutUserInput } from './review-create-without-user.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ReviewCreateOrConnectWithoutUserInput } from './review-create-or-connect-without-user.input';
import { ReviewUpsertWithWhereUniqueWithoutUserInput } from './review-upsert-with-where-unique-without-user.input';
import { ReviewCreateManyUserInputEnvelope } from './review-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { ReviewUpdateWithWhereUniqueWithoutUserInput } from './review-update-with-where-unique-without-user.input';
import { ReviewUpdateManyWithWhereWithoutUserInput } from './review-update-many-with-where-without-user.input';
import { ReviewScalarWhereInput } from './review-scalar-where.input';

@InputType()
export class ReviewUpdateManyWithoutUserNestedInput {

    @Field(() => [ReviewCreateWithoutUserInput], {nullable:true})
    @Type(() => ReviewCreateWithoutUserInput)
    @ValidateNested()
    create?: Array<ReviewCreateWithoutUserInput>;

    @Field(() => [ReviewCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutUserInput)
    @ValidateNested()
    connectOrCreate?: Array<ReviewCreateOrConnectWithoutUserInput>;

    @Field(() => [ReviewUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ReviewUpsertWithWhereUniqueWithoutUserInput)
    @ValidateNested()
    upsert?: Array<ReviewUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ReviewCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ReviewCreateManyUserInputEnvelope)
    @ValidateNested()
    createMany?: ReviewCreateManyUserInputEnvelope;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    @ValidateNested()
    set?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'reviewId'>>;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    @ValidateNested()
    disconnect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'reviewId'>>;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    @ValidateNested()
    delete?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'reviewId'>>;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'reviewId'>>;

    @Field(() => [ReviewUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ReviewUpdateWithWhereUniqueWithoutUserInput)
    @ValidateNested()
    update?: Array<ReviewUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ReviewUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => ReviewUpdateManyWithWhereWithoutUserInput)
    @ValidateNested()
    updateMany?: Array<ReviewUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ReviewScalarWhereInput], {nullable:true})
    @Type(() => ReviewScalarWhereInput)
    @ValidateNested()
    deleteMany?: Array<ReviewScalarWhereInput>;
}
