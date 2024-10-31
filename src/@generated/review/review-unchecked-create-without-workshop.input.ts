import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { ReviewsStatus } from '../prisma/reviews-status.enum';
import { ReviewResponseUncheckedCreateNestedManyWithoutReviewInput } from '../review-response/review-response-unchecked-create-nested-many-without-review.input';

@InputType()
export class ReviewUncheckedCreateWithoutWorkshopInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    reviewId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    userId!: bigint | number;

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

    @Field(() => ReviewResponseUncheckedCreateNestedManyWithoutReviewInput, {nullable:true})
    @Type(() => ReviewResponseUncheckedCreateNestedManyWithoutReviewInput)
    reviewResponses?: ReviewResponseUncheckedCreateNestedManyWithoutReviewInput;
}
