import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { ReviewsStatus } from '../../prisma/dto/reviews-status.enum';
import { ReviewResponseUncheckedUpdateManyWithoutReviewNestedInput } from '../../review-response/dto/review-response-unchecked-update-many-without-review-nested.input';
import { ValidateNested } from 'class-validator';
import { CREATE, UPDATE } from 'src/common/constants/validation-groups';


@InputType()
export class ReviewUncheckedUpdateWithoutWorkshopInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    reviewId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    userId?: bigint | number;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    @Validator.IsNumber({}, { message: 'Rating must be a number' })
    @Validator.Min(0, { message: 'Rating cannot be negative' })
    @Validator.Max(5, { message: 'Rating cannot exceed 5' })
    @Validator.IsOptional()
    rating?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    @Validator.IsOptional()
    originalRating?: Decimal;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Review text must be a string' })
    @Validator.Length(0, 10000, { message: 'Review text cannot exceed 10000 characters' })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'Review text is required' })
    @Validator.IsOptional({ groups: [UPDATE]})
    reviewText?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsOptional()
    originalReviewText?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => ReviewsStatus, {nullable:true})
    @Validator.IsEnum(ReviewsStatus, { message: 'Invalid review status' })
    @Validator.IsOptional()
    status?: keyof typeof ReviewsStatus;

    @Field(() => ReviewResponseUncheckedUpdateManyWithoutReviewNestedInput, {nullable:true})
    @Type(() => ReviewResponseUncheckedUpdateManyWithoutReviewNestedInput)
    @ValidateNested()
    @Type(() => ReviewResponseUncheckedUpdateManyWithoutReviewNestedInput)
    reviewResponses?: ReviewResponseUncheckedUpdateManyWithoutReviewNestedInput;
}
