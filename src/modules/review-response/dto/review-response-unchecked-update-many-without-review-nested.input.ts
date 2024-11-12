import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewResponseCreateWithoutReviewInput } from './review-response-create-without-review.input';
import { Type } from 'class-transformer';
import { ReviewResponseCreateOrConnectWithoutReviewInput } from './review-response-create-or-connect-without-review.input';
import { ReviewResponseUpsertWithWhereUniqueWithoutReviewInput } from './review-response-upsert-with-where-unique-without-review.input';
import { ReviewResponseCreateManyReviewInputEnvelope } from './review-response-create-many-review-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReviewResponseWhereUniqueInput } from './review-response-where-unique.input';
import { ReviewResponseUpdateWithWhereUniqueWithoutReviewInput } from './review-response-update-with-where-unique-without-review.input';
import { ReviewResponseUpdateManyWithWhereWithoutReviewInput } from './review-response-update-many-with-where-without-review.input';
import { ReviewResponseScalarWhereInput } from './review-response-scalar-where.input';

@InputType()
export class ReviewResponseUncheckedUpdateManyWithoutReviewNestedInput {

    @Field(() => [ReviewResponseCreateWithoutReviewInput], {nullable:true})
    @Type(() => ReviewResponseCreateWithoutReviewInput)
    create?: Array<ReviewResponseCreateWithoutReviewInput>;

    @Field(() => [ReviewResponseCreateOrConnectWithoutReviewInput], {nullable:true})
    @Type(() => ReviewResponseCreateOrConnectWithoutReviewInput)
    connectOrCreate?: Array<ReviewResponseCreateOrConnectWithoutReviewInput>;

    @Field(() => [ReviewResponseUpsertWithWhereUniqueWithoutReviewInput], {nullable:true})
    @Type(() => ReviewResponseUpsertWithWhereUniqueWithoutReviewInput)
    upsert?: Array<ReviewResponseUpsertWithWhereUniqueWithoutReviewInput>;

    @Field(() => ReviewResponseCreateManyReviewInputEnvelope, {nullable:true})
    @Type(() => ReviewResponseCreateManyReviewInputEnvelope)
    createMany?: ReviewResponseCreateManyReviewInputEnvelope;

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

    @Field(() => [ReviewResponseUpdateWithWhereUniqueWithoutReviewInput], {nullable:true})
    @Type(() => ReviewResponseUpdateWithWhereUniqueWithoutReviewInput)
    update?: Array<ReviewResponseUpdateWithWhereUniqueWithoutReviewInput>;

    @Field(() => [ReviewResponseUpdateManyWithWhereWithoutReviewInput], {nullable:true})
    @Type(() => ReviewResponseUpdateManyWithWhereWithoutReviewInput)
    updateMany?: Array<ReviewResponseUpdateManyWithWhereWithoutReviewInput>;

    @Field(() => [ReviewResponseScalarWhereInput], {nullable:true})
    @Type(() => ReviewResponseScalarWhereInput)
    deleteMany?: Array<ReviewResponseScalarWhereInput>;
}
