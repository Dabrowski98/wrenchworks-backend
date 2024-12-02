import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutReviewsInput } from './workshop-create-without-reviews.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopCreateOrConnectWithoutReviewsInput } from './workshop-create-or-connect-without-reviews.input';
import { WorkshopUpsertWithoutReviewsInput } from './workshop-upsert-without-reviews.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { WorkshopUpdateToOneWithWhereWithoutReviewsInput } from './workshop-update-to-one-with-where-without-reviews.input';

@InputType()
export class WorkshopUpdateOneRequiredWithoutReviewsNestedInput {

    @Field(() => WorkshopCreateWithoutReviewsInput, {nullable:true})
    @Type(() => WorkshopCreateWithoutReviewsInput)
    @ValidateNested()
    create?: WorkshopCreateWithoutReviewsInput;

    @Field(() => WorkshopCreateOrConnectWithoutReviewsInput, {nullable:true})
    @Type(() => WorkshopCreateOrConnectWithoutReviewsInput)
    @ValidateNested()
    connectOrCreate?: WorkshopCreateOrConnectWithoutReviewsInput;

    @Field(() => WorkshopUpsertWithoutReviewsInput, {nullable:true})
    @Type(() => WorkshopUpsertWithoutReviewsInput)
    @ValidateNested()
    upsert?: WorkshopUpsertWithoutReviewsInput;

    @Field(() => WorkshopWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId' | 'addressId' | 'email'>;

    @Field(() => WorkshopUpdateToOneWithWhereWithoutReviewsInput, {nullable:true})
    @Type(() => WorkshopUpdateToOneWithWhereWithoutReviewsInput)
    @ValidateNested()
    update?: WorkshopUpdateToOneWithWhereWithoutReviewsInput;
}
