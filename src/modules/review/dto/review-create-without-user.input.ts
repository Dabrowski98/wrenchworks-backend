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
import { WorkshopCreateNestedOneWithoutReviewsInput } from '../../workshop/dto/workshop-create-nested-one-without-reviews.input';
import { ValidateNested } from 'class-validator';
import { ReviewResponseCreateNestedManyWithoutReviewInput } from '../../review-response/dto/review-response-create-nested-many-without-review.input';
import { CREATE, UPDATE } from 'src/common/constants/validation-groups';

@InputType()
export class ReviewCreateWithoutUserInput {

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    @Validator.IsNumber({}, { message: 'Rating must be a number' })
    @Validator.Min(0, { message: 'Rating cannot be negative' })
    @Validator.Max(5, { message: 'Rating cannot exceed 5' })
    @Validator.IsOptional()
    rating?: Decimal;

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'Review text must be a string' })
    @Validator.Length(0, 10000, { message: 'Review text cannot exceed 10000 characters' })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'Review text is required' })
    @Validator.IsOptional({ groups: [UPDATE]})
    reviewText!: string;

    @Field(() => ReviewsStatus, {nullable:true})
    @Validator.IsEnum(ReviewsStatus, { message: 'Invalid review status' })
    @Validator.IsOptional()
    status?: keyof typeof ReviewsStatus;

    @Field(() => WorkshopCreateNestedOneWithoutReviewsInput, {nullable:false})
    @Type(() => WorkshopCreateNestedOneWithoutReviewsInput)
    @ValidateNested()
    @Type(() => WorkshopCreateNestedOneWithoutReviewsInput)
    workshop!: WorkshopCreateNestedOneWithoutReviewsInput;

    }