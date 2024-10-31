import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewResponseWhereInput } from './review-response-where.input';

@InputType()
export class ReviewResponseNullableRelationFilter {

    @Field(() => ReviewResponseWhereInput, {nullable:true})
    is?: ReviewResponseWhereInput;

    @Field(() => ReviewResponseWhereInput, {nullable:true})
    isNot?: ReviewResponseWhereInput;
}
