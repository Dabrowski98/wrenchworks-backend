import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ReviewsResponsesStatus } from '../../prisma/dto/reviews-responses-status.enum';
import { ReviewResponseCreateNestedOneWithoutOtherReviewResponsesInput } from './review-response-create-nested-one-without-other-review-responses.input';
import { Type } from 'class-transformer';
import { ReviewResponseCreateNestedManyWithoutReviewResponseInput } from './review-response-create-nested-many-without-review-response.input';
import { ReviewCreateNestedOneWithoutReviewResponsesInput } from '../../review/dto/review-create-nested-one-without-review-responses.input';
import { UserCreateNestedOneWithoutReviewResponsesInput } from '../../user/dto/user-create-nested-one-without-review-responses.input';
import { CREATE, UPDATE } from 'src/constants/validation-groups';
import { GraphQLBigInt } from 'graphql-scalars';


@InputType()
export class ReviewResponseCreateInput {

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'Response text must be a string' })
    @Validator.IsNotEmpty({groups: [CREATE], message: 'Response text is required' })
    @Validator.IsOptional({groups: [UPDATE]})
    @Validator.Length(0, 5000, { message: 'Response text cannot exceed 5000 characters' })
    responseText!: string;

    @Field(() => ReviewsResponsesStatus, {nullable:true})
    @Validator.IsEnum(ReviewsResponsesStatus, { message: 'Invalid response status' })
    status?: keyof typeof ReviewsResponsesStatus;

    @Field(() => GraphQLBigInt, { nullable: false })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'Review ID is required' })
    @Validator.IsOptional({groups: [UPDATE]})
    reviewId!: bigint;
  
    @Field(() => GraphQLBigInt, { nullable: false })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'User ID is required' })
    @Validator.IsOptional({groups: [UPDATE]})
    userId!: bigint;
  
    @Field(() => GraphQLBigInt, { nullable: true })
    parentResponseId?: bigint;
}
