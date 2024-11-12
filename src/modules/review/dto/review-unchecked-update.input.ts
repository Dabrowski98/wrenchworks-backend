import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import * as Validator from 'class-validator';
import { ReviewsStatus } from '../../prisma/dto/reviews-status.enum';
import { ReviewResponseUncheckedUpdateManyWithoutReviewNestedInput } from '../../review-response/dto/review-response-unchecked-update-many-without-review-nested.input';

@InputType()
export class ReviewUncheckedUpdateInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    reviewId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    userId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopId?: bigint | number;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    @Validator.IsNumber({}, { message: 'Rating must be a number' })
    @Validator.Min(0, { message: 'Rating cannot be negative' })
    @Validator.Max(5, { message: 'Rating cannot exceed 5' })
    rating?: Decimal;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Review text must be a string' })
    @Validator.IsNotEmpty({groups: [CREATE], message: 'Review text is required' })
    @Validator.IsOptional({groups: [UPDATE]})
    @Validator.Length(0, 10000, { message: 'Review text cannot exceed 10000 characters' })
    reviewText?: string;

    @Field(() => Date, {nullable:true})
    @Validator.IsDate({ message: 'Review date must be a valid date' })
    reviewDate?: Date | string;

    @Field(() => ReviewsStatus, {nullable:true})
    @Validator.IsEnum(ReviewsStatus, { message: 'Invalid review status' })
    status?: keyof typeof ReviewsStatus;

    @Field(() => ReviewResponseUncheckedUpdateManyWithoutReviewNestedInput, {nullable:true})
    @Type(() => ReviewResponseUncheckedUpdateManyWithoutReviewNestedInput)
    reviewResponses?: ReviewResponseUncheckedUpdateManyWithoutReviewNestedInput;
}
