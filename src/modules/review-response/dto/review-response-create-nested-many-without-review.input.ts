import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewResponseCreateWithoutReviewInput } from './review-response-create-without-review.input';
import { HideField } from '@nestjs/graphql';
import { ReviewResponseCreateOrConnectWithoutReviewInput } from './review-response-create-or-connect-without-review.input';
import { ReviewResponseCreateManyReviewInputEnvelope } from './review-response-create-many-review-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReviewResponseWhereUniqueInput } from './review-response-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class ReviewResponseCreateNestedManyWithoutReviewInput {

    @HideField()
    create?: Array<ReviewResponseCreateWithoutReviewInput>;

    @HideField()
    connectOrCreate?: Array<ReviewResponseCreateOrConnectWithoutReviewInput>;

    @HideField()
    createMany?: ReviewResponseCreateManyReviewInputEnvelope;

    @Field(() => [ReviewResponseWhereUniqueInput], {nullable:true})
    @Type(() => ReviewResponseWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<ReviewResponseWhereUniqueInput, 'reviewResponseId'>>;
}
