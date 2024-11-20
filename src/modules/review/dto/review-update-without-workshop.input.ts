import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import * as Validator from 'class-validator';
import { ReviewsStatus } from '../../prisma/dto/reviews-status.enum';
import { UserUpdateOneRequiredWithoutReviewsNestedInput } from '../../user/dto/user-update-one-required-without-reviews-nested.input';
import { ReviewResponseUpdateManyWithoutReviewNestedInput } from '../../review-response/dto/review-response-update-many-without-review-nested.input';


@InputType()
export class ReviewUpdateWithoutWorkshopInput {

    @HideField()
    reviewId?: bigint | number;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    @Validator.IsNumber({}, { message: 'Rating must be a number' })
    @Validator.Min(0, { message: 'Rating cannot be negative' })
    @Validator.Max(5, { message: 'Rating cannot exceed 5' })
    rating?: Decimal;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Review text must be a string' })
    @Validator.IsNotEmpty({ message: 'Review text is required' })
    @Validator.Length(0, 10000, { message: 'Review text cannot exceed 10000 characters' })
    reviewText?: string;

    @Field(() => Date, {nullable:true})
    @Validator.IsDate({ message: 'Review date must be a valid date' })
    reviewDate?: Date | string;

    @Field(() => ReviewsStatus, {nullable:true})
    @Validator.IsEnum(ReviewsStatus, { message: 'Invalid review status' })
    status?: keyof typeof ReviewsStatus;

    @Field(() => UserUpdateOneRequiredWithoutReviewsNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutReviewsNestedInput)
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput;

    @Field(() => ReviewResponseUpdateManyWithoutReviewNestedInput, {nullable:true})
    @Type(() => ReviewResponseUpdateManyWithoutReviewNestedInput)
    reviewResponses?: ReviewResponseUpdateManyWithoutReviewNestedInput;
}
