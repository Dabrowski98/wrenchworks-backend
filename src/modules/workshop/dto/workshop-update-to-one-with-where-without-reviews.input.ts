import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopWhereInput } from './workshop-where.input';
import { Type } from 'class-transformer';
import { WorkshopUpdateWithoutReviewsInput } from './workshop-update-without-reviews.input';

@InputType()
export class WorkshopUpdateToOneWithWhereWithoutReviewsInput {

    @Field(() => WorkshopWhereInput, {nullable:true})
    @Type(() => WorkshopWhereInput)
    where?: WorkshopWhereInput;

    @Field(() => WorkshopUpdateWithoutReviewsInput, {nullable:false})
    @Type(() => WorkshopUpdateWithoutReviewsInput)
    data!: WorkshopUpdateWithoutReviewsInput;
}
