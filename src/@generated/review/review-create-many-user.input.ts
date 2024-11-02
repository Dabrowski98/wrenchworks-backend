import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { ReviewsStatus } from '../prisma/reviews-status.enum';

@InputType()
export class ReviewCreateManyUserInput {

    @HideField()
    reviewId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint | number;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    rating?: Decimal;

    @Field(() => String, {nullable:false})
    reviewText!: string;

    @Field(() => Date, {nullable:true})
    reviewDate?: Date | string;

    @Field(() => ReviewsStatus, {nullable:true})
    status?: keyof typeof ReviewsStatus;
}
