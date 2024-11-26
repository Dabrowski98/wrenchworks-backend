import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCreateInput } from './review-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneReviewArgs {

    @Field(() => ReviewCreateInput, {nullable:false})
    @Type(() => ReviewCreateInput)
    @ValidateNested()
    data!: ReviewCreateInput;
}
