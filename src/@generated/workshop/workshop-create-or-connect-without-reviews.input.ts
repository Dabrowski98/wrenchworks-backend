import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { Type } from 'class-transformer';
import { WorkshopCreateWithoutReviewsInput } from './workshop-create-without-reviews.input';

@InputType()
export class WorkshopCreateOrConnectWithoutReviewsInput {

    @Field(() => WorkshopWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId'>;

    @Field(() => WorkshopCreateWithoutReviewsInput, {nullable:false})
    @Type(() => WorkshopCreateWithoutReviewsInput)
    create!: WorkshopCreateWithoutReviewsInput;
}
