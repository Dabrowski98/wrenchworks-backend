import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCreateWithoutWorkshopInput } from './review-create-without-workshop.input';

@InputType()
export class ReviewCreateOrConnectWithoutWorkshopInput {

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'reviewId'>;

    @Field(() => ReviewCreateWithoutWorkshopInput, {nullable:false})
    @Type(() => ReviewCreateWithoutWorkshopInput)
    create!: ReviewCreateWithoutWorkshopInput;
}
