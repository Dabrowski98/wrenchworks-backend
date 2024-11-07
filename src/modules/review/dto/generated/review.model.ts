import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { ReviewsStatus } from '../../../prisma/dto/generated/reviews-status.enum';
import { User } from '../../../user/dto/generated/user.model';
import { Workshop } from '../../../workshop/dto/generated/workshop.model';
import { ReviewResponse } from '../../../review-response/dto/generated/review-response.model';
import { ReviewCount } from './review-count.output';

@ObjectType()
export class Review {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    reviewId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    userId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint;

    @Field(() => GraphQLDecimal, {nullable:false,defaultValue:0})
    rating!: Decimal;

    @Field(() => String, {nullable:false})
    reviewText!: string;

    @Field(() => Date, {nullable:false})
    reviewDate!: Date;

    @Field(() => ReviewsStatus, {nullable:false,defaultValue:'pending'})
    status!: keyof typeof ReviewsStatus;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Workshop, {nullable:false})
    workshop?: Workshop;

    @Field(() => [ReviewResponse], {nullable:true})
    reviewResponses?: Array<ReviewResponse>;

    @Field(() => ReviewCount, {nullable:false})
    _count?: ReviewCount;
}
