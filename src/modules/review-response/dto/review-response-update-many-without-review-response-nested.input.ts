import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewResponseCreateWithoutReviewResponseInput } from './review-response-create-without-review-response.input';
import { Type } from 'class-transformer';
import { ReviewResponseCreateOrConnectWithoutReviewResponseInput } from './review-response-create-or-connect-without-review-response.input';
import { ReviewResponseUpsertWithWhereUniqueWithoutReviewResponseInput } from './review-response-upsert-with-where-unique-without-review-response.input';
import { ReviewResponseCreateManyReviewResponseInputEnvelope } from './review-response-create-many-review-response-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReviewResponseWhereUniqueInput } from './review-response-where-unique.input';
import { ReviewResponseUpdateWithWhereUniqueWithoutReviewResponseInput } from './review-response-update-with-where-unique-without-review-response.input';
import { ReviewResponseUpdateManyWithWhereWithoutReviewResponseInput } from './review-response-update-many-with-where-without-review-response.input';
import { ReviewResponseScalarWhereInput } from './review-response-scalar-where.input';

@InputType()
export class ReviewResponseUpdateManyWithoutReviewResponseNestedInput {

    @Field(() => [ReviewResponseCreateWithoutReviewResponseInput], {nullable:true})
    @Type(() => ReviewResponseCreateWithoutReviewResponseInput)
    create?: Array<ReviewResponseCreateWithoutReviewResponseInput>;

    @Field(() => [ReviewResponseCreateOrConnectWithoutReviewResponseInput], {nullable:true})
    @Type(() => ReviewResponseCreateOrConnectWithoutReviewResponseInput)
    connectOrCreate?: Array<ReviewResponseCreateOrConnectWithoutReviewResponseInput>;

    @Field(() => [ReviewResponseUpsertWithWhereUniqueWithoutReviewResponseInput], {nullable:true})
    @Type(() => ReviewResponseUpsertWithWhereUniqueWithoutReviewResponseInput)
    upsert?: Array<ReviewResponseUpsertWithWhereUniqueWithoutReviewResponseInput>;

    @Field(() => ReviewResponseCreateManyReviewResponseInputEnvelope, {nullable:true})
    @Type(() => ReviewResponseCreateManyReviewResponseInputEnvelope)
    createMany?: ReviewResponseCreateManyReviewResponseInputEnvelope;

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

    @Field(() => [ReviewResponseUpdateWithWhereUniqueWithoutReviewResponseInput], {nullable:true})
    @Type(() => ReviewResponseUpdateWithWhereUniqueWithoutReviewResponseInput)
    update?: Array<ReviewResponseUpdateWithWhereUniqueWithoutReviewResponseInput>;

    @Field(() => [ReviewResponseUpdateManyWithWhereWithoutReviewResponseInput], {nullable:true})
    @Type(() => ReviewResponseUpdateManyWithWhereWithoutReviewResponseInput)
    updateMany?: Array<ReviewResponseUpdateManyWithWhereWithoutReviewResponseInput>;

    @Field(() => [ReviewResponseScalarWhereInput], {nullable:true})
    @Type(() => ReviewResponseScalarWhereInput)
    deleteMany?: Array<ReviewResponseScalarWhereInput>;
}
