import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopUpdateWithoutReviewsInput } from './workshop-update-without-reviews.input';
import { Type } from 'class-transformer';
import { WorkshopCreateWithoutReviewsInput } from './workshop-create-without-reviews.input';
import { WorkshopWhereInput } from './workshop-where.input';

@InputType()
export class WorkshopUpsertWithoutReviewsInput {

    @Field(() => WorkshopUpdateWithoutReviewsInput, {nullable:false})
    @Type(() => WorkshopUpdateWithoutReviewsInput)
    update!: WorkshopUpdateWithoutReviewsInput;

    @Field(() => WorkshopCreateWithoutReviewsInput, {nullable:false})
    @Type(() => WorkshopCreateWithoutReviewsInput)
    create!: WorkshopCreateWithoutReviewsInput;

    @Field(() => WorkshopWhereInput, {nullable:true})
    @Type(() => WorkshopWhereInput)
    where?: WorkshopWhereInput;
}
