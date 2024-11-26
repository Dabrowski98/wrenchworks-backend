import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewResponseWhereInput } from './review-response-where.input';
import { Type } from 'class-transformer';
import { ReviewResponseUpdateWithoutChildrenResponsesInput } from './review-response-update-without-children-responses.input';

@InputType()
export class ReviewResponseUpdateToOneWithWhereWithoutChildrenResponsesInput {

    @Field(() => ReviewResponseWhereInput, {nullable:true})
    @Type(() => ReviewResponseWhereInput)
    where?: ReviewResponseWhereInput;

    @Field(() => ReviewResponseUpdateWithoutChildrenResponsesInput, {nullable:false})
    @Type(() => ReviewResponseUpdateWithoutChildrenResponsesInput)
    data!: ReviewResponseUpdateWithoutChildrenResponsesInput;
}
