import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutReviewsInput } from './workshop-create-without-reviews.input';
import { HideField } from '@nestjs/graphql';
import { WorkshopCreateOrConnectWithoutReviewsInput } from './workshop-create-or-connect-without-reviews.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class WorkshopCreateNestedOneWithoutReviewsInput {

    @HideField()
    create?: WorkshopCreateWithoutReviewsInput;

    @HideField()
    connectOrCreate?: WorkshopCreateOrConnectWithoutReviewsInput;

    @Field(() => WorkshopWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId' | 'addressId'>;
}
