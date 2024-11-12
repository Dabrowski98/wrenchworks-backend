import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewResponseCreateManyReviewInput } from './review-response-create-many-review.input';
import { Type } from 'class-transformer';

@InputType()
export class ReviewResponseCreateManyReviewInputEnvelope {

    @Field(() => [ReviewResponseCreateManyReviewInput], {nullable:false})
    @Type(() => ReviewResponseCreateManyReviewInput)
    data!: Array<ReviewResponseCreateManyReviewInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
