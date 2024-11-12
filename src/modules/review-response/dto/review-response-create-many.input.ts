import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { ReviewsResponsesStatus } from '../../prisma/dto/reviews-responses-status.enum';

@InputType()
export class ReviewResponseCreateManyInput {

    @HideField()
    reviewResponseId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    reviewId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    userId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    parentResponseId?: bigint | number;

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'Response text must be a string' })
    @Validator.IsNotEmpty({groups: [CREATE], message: 'Response text is required' })
    @Validator.IsOptional({groups: [UPDATE]})
    @Validator.Length(0, 5000, { message: 'Response text cannot exceed 5000 characters' })
    responseText!: string;

    @Field(() => Date, {nullable:true})
    @Validator.IsDate({ message: 'Response date must be a valid date' })
    responseDate?: Date | string;

    @Field(() => ReviewsResponsesStatus, {nullable:true})
    @Validator.IsEnum(ReviewsResponsesStatus, { message: 'Invalid response status' })
    status?: keyof typeof ReviewsResponsesStatus;
}
