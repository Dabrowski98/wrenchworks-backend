import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewUpdateWithoutWorkshopInput } from './review-update-without-workshop.input';

@InputType()
export class ReviewUpdateWithWhereUniqueWithoutWorkshopInput {

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'reviewId'>;

    @Field(() => ReviewUpdateWithoutWorkshopInput, {nullable:false})
    @Type(() => ReviewUpdateWithoutWorkshopInput)
    data!: ReviewUpdateWithoutWorkshopInput;
}