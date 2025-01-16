import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { ReviewResponseStatus } from '../../prisma/dto/review-response-status.enum';

@ObjectType()
export class ReviewResponseMinAggregate {

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

    @Field(() => String, {nullable:true})
    originalResponseText?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ReviewResponseStatus, {nullable:true})
    status?: keyof typeof ReviewResponseStatus;
}
