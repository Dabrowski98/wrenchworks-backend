import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewResponseCreateWithoutParentResponseInput } from './review-response-create-without-parent-response.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ReviewResponseCreateOrConnectWithoutParentResponseInput } from './review-response-create-or-connect-without-parent-response.input';
import { ReviewResponseUpsertWithWhereUniqueWithoutParentResponseInput } from './review-response-upsert-with-where-unique-without-parent-response.input';
import { ReviewResponseCreateManyParentResponseInputEnvelope } from './review-response-create-many-parent-response-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReviewResponseWhereUniqueInput } from './review-response-where-unique.input';
import { ReviewResponseUpdateWithWhereUniqueWithoutParentResponseInput } from './review-response-update-with-where-unique-without-parent-response.input';
import { ReviewResponseUpdateManyWithWhereWithoutParentResponseInput } from './review-response-update-many-with-where-without-parent-response.input';
import { ReviewResponseScalarWhereInput } from './review-response-scalar-where.input';

@InputType()
export class ReviewResponseUpdateManyWithoutParentResponseNestedInput {

    @Field(() => [ReviewResponseCreateWithoutParentResponseInput], {nullable:true})
    @Type(() => ReviewResponseCreateWithoutParentResponseInput)
    @ValidateNested()
    create?: Array<ReviewResponseCreateWithoutParentResponseInput>;

    @Field(() => [ReviewResponseCreateOrConnectWithoutParentResponseInput], {nullable:true})
    @Type(() => ReviewResponseCreateOrConnectWithoutParentResponseInput)
    @ValidateNested()
    connectOrCreate?: Array<ReviewResponseCreateOrConnectWithoutParentResponseInput>;

    @Field(() => [ReviewResponseUpsertWithWhereUniqueWithoutParentResponseInput], {nullable:true})
    @Type(() => ReviewResponseUpsertWithWhereUniqueWithoutParentResponseInput)
    @ValidateNested()
    upsert?: Array<ReviewResponseUpsertWithWhereUniqueWithoutParentResponseInput>;

    @Field(() => ReviewResponseCreateManyParentResponseInputEnvelope, {nullable:true})
    @Type(() => ReviewResponseCreateManyParentResponseInputEnvelope)
    @ValidateNested()
    createMany?: ReviewResponseCreateManyParentResponseInputEnvelope;

    @Field(() => [ReviewResponseWhereUniqueInput], {nullable:true})
    @Type(() => ReviewResponseWhereUniqueInput)
    @ValidateNested()
    set?: Array<Prisma.AtLeast<ReviewResponseWhereUniqueInput, 'reviewResponseId'>>;

    @Field(() => [ReviewResponseWhereUniqueInput], {nullable:true})
    @Type(() => ReviewResponseWhereUniqueInput)
    @ValidateNested()
    disconnect?: Array<Prisma.AtLeast<ReviewResponseWhereUniqueInput, 'reviewResponseId'>>;

    @Field(() => [ReviewResponseWhereUniqueInput], {nullable:true})
    @Type(() => ReviewResponseWhereUniqueInput)
    @ValidateNested()
    delete?: Array<Prisma.AtLeast<ReviewResponseWhereUniqueInput, 'reviewResponseId'>>;

    @Field(() => [ReviewResponseWhereUniqueInput], {nullable:true})
    @Type(() => ReviewResponseWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<ReviewResponseWhereUniqueInput, 'reviewResponseId'>>;

    @Field(() => [ReviewResponseUpdateWithWhereUniqueWithoutParentResponseInput], {nullable:true})
    @Type(() => ReviewResponseUpdateWithWhereUniqueWithoutParentResponseInput)
    @ValidateNested()
    update?: Array<ReviewResponseUpdateWithWhereUniqueWithoutParentResponseInput>;

    @Field(() => [ReviewResponseUpdateManyWithWhereWithoutParentResponseInput], {nullable:true})
    @Type(() => ReviewResponseUpdateManyWithWhereWithoutParentResponseInput)
    @ValidateNested()
    updateMany?: Array<ReviewResponseUpdateManyWithWhereWithoutParentResponseInput>;

    @Field(() => [ReviewResponseScalarWhereInput], {nullable:true})
    @Type(() => ReviewResponseScalarWhereInput)
    @ValidateNested()
    deleteMany?: Array<ReviewResponseScalarWhereInput>;
}
