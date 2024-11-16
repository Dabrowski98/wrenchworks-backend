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
import { UserCreateNestedOneWithoutReviewsInput } from '../../user/dto/user-create-nested-one-without-reviews.input';
import { WorkshopCreateNestedOneWithoutReviewsInput } from '../../workshop/dto/workshop-create-nested-one-without-reviews.input';
import { ReviewResponseCreateNestedManyWithoutReviewInput } from '../../review-response/dto/review-response-create-nested-many-without-review.input';
import { CREATE, UPDATE } from 'src/constants/validation-groups';
import { GraphQLBigInt } from 'graphql-scalars';


@InputType()
export class ReviewCreateInput {

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    @Validator.IsNumber({}, { message: 'Rating must be a number' })
    @Validator.Min(0, { message: 'Rating cannot be negative' })
    @Validator.Max(5, { message: 'Rating cannot exceed 5' })
    rating?: Decimal;

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'Review text must be a string' })
    @Validator.IsNotEmpty({groups: [CREATE], message: 'Review text is required' })
    @Validator.IsOptional({groups: [UPDATE]})
    @Validator.Length(0, 10000, { message: 'Review text cannot exceed 10000 characters' })
    reviewText!: string;

    @Field(() => ReviewsStatus, {nullable:true})
    @Validator.IsEnum(ReviewsStatus, { message: 'Invalid review status' })
    status?: keyof typeof ReviewsStatus;

    @Field(() => GraphQLBigInt, { nullable: false })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'User ID is required' })
    @Validator.IsOptional({groups: [UPDATE]})
    userId!: bigint;

    @Field(() => GraphQLBigInt, { nullable: false })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'WorkshopId is required' })
    @Validator.IsOptional({groups: [UPDATE]})
    workshopId!: bigint;
}
