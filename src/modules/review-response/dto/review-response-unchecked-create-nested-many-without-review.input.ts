import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewResponseCreateWithoutReviewInput } from './review-response-create-without-review.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ReviewResponseCreateOrConnectWithoutReviewInput } from './review-response-create-or-connect-without-review.input';
import { ReviewResponseCreateManyReviewInputEnvelope } from './review-response-create-many-review-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReviewResponseWhereUniqueInput } from './review-response-where-unique.input';

@InputType()
export class ReviewResponseUncheckedCreateNestedManyWithoutReviewInput {

    @Field(() => [ReviewResponseCreateWithoutReviewInput], {nullable:true})
    @Type(() => ReviewResponseCreateWithoutReviewInput)
    @ValidateNested()
    create?: Array<ReviewResponseCreateWithoutReviewInput>;

    @Field(() => [ReviewResponseCreateOrConnectWithoutReviewInput], {nullable:true})
    @Type(() => ReviewResponseCreateOrConnectWithoutReviewInput)
    @ValidateNested()
    connectOrCreate?: Array<ReviewResponseCreateOrConnectWithoutReviewInput>;

    @Field(() => ReviewResponseCreateManyReviewInputEnvelope, {nullable:true})
    @Type(() => ReviewResponseCreateManyReviewInputEnvelope)
    @ValidateNested()
    createMany?: ReviewResponseCreateManyReviewInputEnvelope;

    @Field(() => [ReviewResponseWhereUniqueInput], {nullable:true})
    @Type(() => ReviewResponseWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<ReviewResponseWhereUniqueInput, 'reviewResponseId'>>;
}
