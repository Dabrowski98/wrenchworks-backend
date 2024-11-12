import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ReviewsResponsesStatus } from '../../prisma/dto/reviews-responses-status.enum';

@InputType()
export class ReviewResponseUpdateManyMutationInput {

    @HideField()
    reviewResponseId?: bigint | number;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Response text must be a string' })
    @Validator.IsNotEmpty({groups: [CREATE], message: 'Response text is required' })
    @Validator.IsOptional({groups: [UPDATE]})
    @Validator.Length(0, 5000, { message: 'Response text cannot exceed 5000 characters' })
    responseText?: string;

    @Field(() => Date, {nullable:true})
    @Validator.IsDate({ message: 'Response date must be a valid date' })
    responseDate?: Date | string;

    @Field(() => ReviewsResponsesStatus, {nullable:true})
    @Validator.IsEnum(ReviewsResponsesStatus, { message: 'Invalid response status' })
    status?: keyof typeof ReviewsResponsesStatus;
}
