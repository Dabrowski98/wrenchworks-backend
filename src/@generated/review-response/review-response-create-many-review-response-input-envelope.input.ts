import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewResponseCreateManyReviewResponseInput } from './review-response-create-many-review-response.input';
import { Type } from 'class-transformer';

@InputType()
export class ReviewResponseCreateManyReviewResponseInputEnvelope {

    @Field(() => [ReviewResponseCreateManyReviewResponseInput], {nullable:false})
    @Type(() => ReviewResponseCreateManyReviewResponseInput)
    data!: Array<ReviewResponseCreateManyReviewResponseInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
