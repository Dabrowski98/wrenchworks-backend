import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewResponseCreateWithoutParentResponseInput } from './review-response-create-without-parent-response.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ReviewResponseCreateOrConnectWithoutParentResponseInput } from './review-response-create-or-connect-without-parent-response.input';
import { ReviewResponseCreateManyParentResponseInputEnvelope } from './review-response-create-many-parent-response-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReviewResponseWhereUniqueInput } from './review-response-where-unique.input';

@InputType()
export class ReviewResponseUncheckedCreateNestedManyWithoutParentResponseInput {

    @Field(() => [ReviewResponseCreateWithoutParentResponseInput], {nullable:true})
    @Type(() => ReviewResponseCreateWithoutParentResponseInput)
    @ValidateNested()
    create?: Array<ReviewResponseCreateWithoutParentResponseInput>;

    @Field(() => [ReviewResponseCreateOrConnectWithoutParentResponseInput], {nullable:true})
    @Type(() => ReviewResponseCreateOrConnectWithoutParentResponseInput)
    @ValidateNested()
    connectOrCreate?: Array<ReviewResponseCreateOrConnectWithoutParentResponseInput>;

    @Field(() => ReviewResponseCreateManyParentResponseInputEnvelope, {nullable:true})
    @Type(() => ReviewResponseCreateManyParentResponseInputEnvelope)
    @ValidateNested()
    createMany?: ReviewResponseCreateManyParentResponseInputEnvelope;

    @Field(() => [ReviewResponseWhereUniqueInput], {nullable:true})
    @Type(() => ReviewResponseWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<ReviewResponseWhereUniqueInput, 'reviewResponseId'>>;
}
