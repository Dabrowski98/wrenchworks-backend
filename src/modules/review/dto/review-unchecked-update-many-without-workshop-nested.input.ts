import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateWithoutWorkshopInput } from './review-create-without-workshop.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ReviewCreateOrConnectWithoutWorkshopInput } from './review-create-or-connect-without-workshop.input';
import { ReviewUpsertWithWhereUniqueWithoutWorkshopInput } from './review-upsert-with-where-unique-without-workshop.input';
import { ReviewCreateManyWorkshopInputEnvelope } from './review-create-many-workshop-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { ReviewUpdateWithWhereUniqueWithoutWorkshopInput } from './review-update-with-where-unique-without-workshop.input';
import { ReviewUpdateManyWithWhereWithoutWorkshopInput } from './review-update-many-with-where-without-workshop.input';
import { ReviewScalarWhereInput } from './review-scalar-where.input';

@InputType()
export class ReviewUncheckedUpdateManyWithoutWorkshopNestedInput {

    @Field(() => [ReviewCreateWithoutWorkshopInput], {nullable:true})
    @Type(() => ReviewCreateWithoutWorkshopInput)
    @ValidateNested()
    create?: Array<ReviewCreateWithoutWorkshopInput>;

    @Field(() => [ReviewCreateOrConnectWithoutWorkshopInput], {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutWorkshopInput)
    @ValidateNested()
    connectOrCreate?: Array<ReviewCreateOrConnectWithoutWorkshopInput>;

    @Field(() => [ReviewUpsertWithWhereUniqueWithoutWorkshopInput], {nullable:true})
    @Type(() => ReviewUpsertWithWhereUniqueWithoutWorkshopInput)
    @ValidateNested()
    upsert?: Array<ReviewUpsertWithWhereUniqueWithoutWorkshopInput>;

    @Field(() => ReviewCreateManyWorkshopInputEnvelope, {nullable:true})
    @Type(() => ReviewCreateManyWorkshopInputEnvelope)
    @ValidateNested()
    createMany?: ReviewCreateManyWorkshopInputEnvelope;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    @ValidateNested()
    set?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'reviewId'>>;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    @ValidateNested()
    disconnect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'reviewId'>>;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    @ValidateNested()
    delete?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'reviewId'>>;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'reviewId'>>;

    @Field(() => [ReviewUpdateWithWhereUniqueWithoutWorkshopInput], {nullable:true})
    @Type(() => ReviewUpdateWithWhereUniqueWithoutWorkshopInput)
    @ValidateNested()
    update?: Array<ReviewUpdateWithWhereUniqueWithoutWorkshopInput>;

    @Field(() => [ReviewUpdateManyWithWhereWithoutWorkshopInput], {nullable:true})
    @Type(() => ReviewUpdateManyWithWhereWithoutWorkshopInput)
    @ValidateNested()
    updateMany?: Array<ReviewUpdateManyWithWhereWithoutWorkshopInput>;

    @Field(() => [ReviewScalarWhereInput], {nullable:true})
    @Type(() => ReviewScalarWhereInput)
    @ValidateNested()
    deleteMany?: Array<ReviewScalarWhereInput>;
}
