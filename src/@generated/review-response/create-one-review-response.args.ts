import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewResponseCreateInput } from './review-response-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneReviewResponseArgs {

    @Field(() => ReviewResponseCreateInput, {nullable:false})
    @Type(() => ReviewResponseCreateInput)
    data!: ReviewResponseCreateInput;
}
