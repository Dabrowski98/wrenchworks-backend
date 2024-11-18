import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewResponseCreateInput } from './review-response-create.input';
import { Type } from 'class-transformer';
import * as Validator from 'class-validator';

@ArgsType()
export class CreateOneReviewResponseArgs {

    @Field(() => ReviewResponseCreateInput, {nullable:false})
    @Type(() => ReviewResponseCreateInput)
    @Validator.ValidateNested()
    data!: ReviewResponseCreateInput;
}
