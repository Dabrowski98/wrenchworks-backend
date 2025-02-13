import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import * as Validator from 'class-validator';
import { ReviewStatus } from '../../prisma/dto/review-status.enum';
import { UserCreateNestedOneWithoutReviewsInput } from '../../user/dto/user-create-nested-one-without-reviews.input';
import { ValidateNested } from 'class-validator';
import { ReviewResponseCreateNestedManyWithoutReviewInput } from '../../review-response/dto/review-response-create-nested-many-without-review.input';

@InputType()
export class ReviewCreateWithoutWorkshopInput {

    @HideField()
    reviewId?: bigint | number;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    @Validator.IsNumber({}, { message: 'Rating must be a number' })
    @Validator.Min(0, { message: 'Rating cannot be negative' })
    @Validator.Max(5, { message: 'Rating cannot exceed 5' })
    @Validator.IsOptional()
    rating?: Decimal;

    @HideField()
    originalRating?: Decimal;

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'Review text must be a string' })
    @Validator.Length(0, 10000, { message: 'Review text cannot exceed 10000 characters' })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'Review text is required' })
    @Validator.IsOptional({ groups: [UPDATE]})
    reviewText!: string;

    @HideField()
    originalReviewText?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => ReviewStatus, {nullable:true})
    @Validator.IsEnum(ReviewStatus, { message: 'Invalid review status' })
    @Validator.IsOptional()
    status?: keyof typeof ReviewStatus;

    @Field(() => UserCreateNestedOneWithoutReviewsInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutReviewsInput)
    @ValidateNested()
    user!: UserCreateNestedOneWithoutReviewsInput;

    @HideField()
    reviewResponses?: ReviewResponseCreateNestedManyWithoutReviewInput;
}
