import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewsResponsesStatus } from './reviews-responses-status.enum';

@InputType()
export class EnumReviewsResponsesStatusFieldUpdateOperationsInput {

    @Field(() => ReviewsResponsesStatus, {nullable:true})
    set?: keyof typeof ReviewsResponsesStatus;
}
