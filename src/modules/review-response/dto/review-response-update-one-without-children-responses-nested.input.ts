import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewResponseCreateWithoutChildrenResponsesInput } from './review-response-create-without-children-responses.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ReviewResponseCreateOrConnectWithoutChildrenResponsesInput } from './review-response-create-or-connect-without-children-responses.input';
import { ReviewResponseUpsertWithoutChildrenResponsesInput } from './review-response-upsert-without-children-responses.input';
import { ReviewResponseWhereInput } from './review-response-where.input';
import { Prisma } from '@prisma/client';
import { ReviewResponseWhereUniqueInput } from './review-response-where-unique.input';
import { ReviewResponseUpdateToOneWithWhereWithoutChildrenResponsesInput } from './review-response-update-to-one-with-where-without-children-responses.input';

@InputType()
export class ReviewResponseUpdateOneWithoutChildrenResponsesNestedInput {

    @Field(() => ReviewResponseCreateWithoutChildrenResponsesInput, {nullable:true})
    @Type(() => ReviewResponseCreateWithoutChildrenResponsesInput)
    @ValidateNested()
    create?: ReviewResponseCreateWithoutChildrenResponsesInput;

    @Field(() => ReviewResponseCreateOrConnectWithoutChildrenResponsesInput, {nullable:true})
    @Type(() => ReviewResponseCreateOrConnectWithoutChildrenResponsesInput)
    @ValidateNested()
    connectOrCreate?: ReviewResponseCreateOrConnectWithoutChildrenResponsesInput;

    @Field(() => ReviewResponseUpsertWithoutChildrenResponsesInput, {nullable:true})
    @Type(() => ReviewResponseUpsertWithoutChildrenResponsesInput)
    @ValidateNested()
    upsert?: ReviewResponseUpsertWithoutChildrenResponsesInput;

    @Field(() => ReviewResponseWhereInput, {nullable:true})
    @Type(() => ReviewResponseWhereInput)
    @ValidateNested()
    disconnect?: ReviewResponseWhereInput;

    @Field(() => ReviewResponseWhereInput, {nullable:true})
    @Type(() => ReviewResponseWhereInput)
    @ValidateNested()
    delete?: ReviewResponseWhereInput;

    @Field(() => ReviewResponseWhereUniqueInput, {nullable:true})
    @Type(() => ReviewResponseWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<ReviewResponseWhereUniqueInput, 'reviewResponseId'>;

    @Field(() => ReviewResponseUpdateToOneWithWhereWithoutChildrenResponsesInput, {nullable:true})
    @Type(() => ReviewResponseUpdateToOneWithWhereWithoutChildrenResponsesInput)
    @ValidateNested()
    update?: ReviewResponseUpdateToOneWithWhereWithoutChildrenResponsesInput;
}
