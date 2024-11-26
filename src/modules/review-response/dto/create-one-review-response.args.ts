import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewResponseCreateInput } from './review-response-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneReviewResponseArgs {

    @Field(() => ReviewResponseCreateInput, {nullable:false})
    @Type(() => ReviewResponseCreateInput)
    @ValidateNested()
    data!: ReviewResponseCreateInput;
}
