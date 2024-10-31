import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutReviewsInput } from './workshop-create-without-reviews.input';
import { Type } from 'class-transformer';
import { WorkshopCreateOrConnectWithoutReviewsInput } from './workshop-create-or-connect-without-reviews.input';
import { WorkshopUpsertWithoutReviewsInput } from './workshop-upsert-without-reviews.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { WorkshopUpdateToOneWithWhereWithoutReviewsInput } from './workshop-update-to-one-with-where-without-reviews.input';

@InputType()
export class WorkshopUpdateOneRequiredWithoutReviewsNestedInput {

    @Field(() => WorkshopCreateWithoutReviewsInput, {nullable:true})
    @Type(() => WorkshopCreateWithoutReviewsInput)
    create?: WorkshopCreateWithoutReviewsInput;

    @Field(() => WorkshopCreateOrConnectWithoutReviewsInput, {nullable:true})
    @Type(() => WorkshopCreateOrConnectWithoutReviewsInput)
    connectOrCreate?: WorkshopCreateOrConnectWithoutReviewsInput;

    @Field(() => WorkshopUpsertWithoutReviewsInput, {nullable:true})
    @Type(() => WorkshopUpsertWithoutReviewsInput)
    upsert?: WorkshopUpsertWithoutReviewsInput;

    @Field(() => WorkshopWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    connect?: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId'>;

    @Field(() => WorkshopUpdateToOneWithWhereWithoutReviewsInput, {nullable:true})
    @Type(() => WorkshopUpdateToOneWithWhereWithoutReviewsInput)
    update?: WorkshopUpdateToOneWithWhereWithoutReviewsInput;
}
