import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateWithoutWorkshopInput } from './review-create-without-workshop.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ReviewCreateOrConnectWithoutWorkshopInput } from './review-create-or-connect-without-workshop.input';
import { ReviewCreateManyWorkshopInputEnvelope } from './review-create-many-workshop-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';

@InputType()
export class ReviewUncheckedCreateNestedManyWithoutWorkshopInput {

    @Field(() => [ReviewCreateWithoutWorkshopInput], {nullable:true})
    @Type(() => ReviewCreateWithoutWorkshopInput)
    @ValidateNested()
    create?: Array<ReviewCreateWithoutWorkshopInput>;

    @Field(() => [ReviewCreateOrConnectWithoutWorkshopInput], {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutWorkshopInput)
    @ValidateNested()
    connectOrCreate?: Array<ReviewCreateOrConnectWithoutWorkshopInput>;

    @Field(() => ReviewCreateManyWorkshopInputEnvelope, {nullable:true})
    @Type(() => ReviewCreateManyWorkshopInputEnvelope)
    @ValidateNested()
    createMany?: ReviewCreateManyWorkshopInputEnvelope;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'reviewId'>>;
}
