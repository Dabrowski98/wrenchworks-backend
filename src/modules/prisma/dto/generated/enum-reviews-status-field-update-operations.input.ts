import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewsStatus } from './reviews-status.enum';

@InputType()
export class EnumReviewsStatusFieldUpdateOperationsInput {

    @Field(() => ReviewsStatus, {nullable:true})
    set?: keyof typeof ReviewsStatus;
}
