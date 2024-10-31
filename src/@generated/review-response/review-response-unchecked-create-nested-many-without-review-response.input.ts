import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewResponseCreateWithoutReviewResponseInput } from './review-response-create-without-review-response.input';
import { Type } from 'class-transformer';
import { ReviewResponseCreateOrConnectWithoutReviewResponseInput } from './review-response-create-or-connect-without-review-response.input';
import { ReviewResponseCreateManyReviewResponseInputEnvelope } from './review-response-create-many-review-response-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReviewResponseWhereUniqueInput } from './review-response-where-unique.input';

@InputType()
export class ReviewResponseUncheckedCreateNestedManyWithoutReviewResponseInput {

    @Field(() => [ReviewResponseCreateWithoutReviewResponseInput], {nullable:true})
    @Type(() => ReviewResponseCreateWithoutReviewResponseInput)
    create?: Array<ReviewResponseCreateWithoutReviewResponseInput>;

    @Field(() => [ReviewResponseCreateOrConnectWithoutReviewResponseInput], {nullable:true})
    @Type(() => ReviewResponseCreateOrConnectWithoutReviewResponseInput)
    connectOrCreate?: Array<ReviewResponseCreateOrConnectWithoutReviewResponseInput>;

    @Field(() => ReviewResponseCreateManyReviewResponseInputEnvelope, {nullable:true})
    @Type(() => ReviewResponseCreateManyReviewResponseInputEnvelope)
    createMany?: ReviewResponseCreateManyReviewResponseInputEnvelope;

    @Field(() => [ReviewResponseWhereUniqueInput], {nullable:true})
    @Type(() => ReviewResponseWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReviewResponseWhereUniqueInput, 'reviewResponseId'>>;
}
