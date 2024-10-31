import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { ReviewsResponsesStatus } from '../prisma/reviews-responses-status.enum';

@ObjectType()
export class ReviewResponseMaxAggregate {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    reviewResponseId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    reviewId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    userId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    parentResponseId?: bigint | number;

    @Field(() => String, {nullable:true})
    responseText?: string;

    @Field(() => Date, {nullable:true})
    responseDate?: Date | string;

    @Field(() => ReviewsResponsesStatus, {nullable:true})
    status?: keyof typeof ReviewsResponsesStatus;
}
