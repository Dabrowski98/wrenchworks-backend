import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewResponseCreateManyUserInput } from './review-response-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class ReviewResponseCreateManyUserInputEnvelope {

    @Field(() => [ReviewResponseCreateManyUserInput], {nullable:false})
    @Type(() => ReviewResponseCreateManyUserInput)
    data!: Array<ReviewResponseCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
