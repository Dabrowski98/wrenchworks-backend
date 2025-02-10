import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateWithoutWorkshopInput } from './review-create-without-workshop.input';
import { HideField } from '@nestjs/graphql';
import { ReviewCreateOrConnectWithoutWorkshopInput } from './review-create-or-connect-without-workshop.input';
import { ReviewCreateManyWorkshopInputEnvelope } from './review-create-many-workshop-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class ReviewCreateNestedManyWithoutWorkshopInput {

    @HideField()
    create?: Array<ReviewCreateWithoutWorkshopInput>;

    @HideField()
    connectOrCreate?: Array<ReviewCreateOrConnectWithoutWorkshopInput>;

    @HideField()
    createMany?: ReviewCreateManyWorkshopInputEnvelope;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'reviewId'>>;
}
