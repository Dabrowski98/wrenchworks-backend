import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { ReviewsStatus } from '../prisma/reviews-status.enum';
import { UserCreateNestedOneWithoutReviewsInput } from '../user/user-create-nested-one-without-reviews.input';
import { WorkshopCreateNestedOneWithoutReviewsInput } from '../workshop/workshop-create-nested-one-without-reviews.input';
import { ReviewResponseCreateNestedManyWithoutReviewInput } from '../review-response/review-response-create-nested-many-without-review.input';

@InputType()
export class ReviewCreateInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    reviewId?: bigint | number;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    rating?: Decimal;

    @Field(() => String, {nullable:false})
    reviewText!: string;

    @Field(() => Date, {nullable:true})
    reviewDate?: Date | string;

    @Field(() => ReviewsStatus, {nullable:true})
    status?: keyof typeof ReviewsStatus;

    @Field(() => UserCreateNestedOneWithoutReviewsInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutReviewsInput)
    user!: UserCreateNestedOneWithoutReviewsInput;

    @Field(() => WorkshopCreateNestedOneWithoutReviewsInput, {nullable:false})
    @Type(() => WorkshopCreateNestedOneWithoutReviewsInput)
    workshop!: WorkshopCreateNestedOneWithoutReviewsInput;

    @Field(() => ReviewResponseCreateNestedManyWithoutReviewInput, {nullable:true})
    @Type(() => ReviewResponseCreateNestedManyWithoutReviewInput)
    reviewResponses?: ReviewResponseCreateNestedManyWithoutReviewInput;
}
