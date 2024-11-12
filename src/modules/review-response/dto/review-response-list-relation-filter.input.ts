import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewResponseWhereInput } from './review-response-where.input';

@InputType()
export class ReviewResponseListRelationFilter {

    @Field(() => ReviewResponseWhereInput, {nullable:true})
    every?: ReviewResponseWhereInput;

    @Field(() => ReviewResponseWhereInput, {nullable:true})
    some?: ReviewResponseWhereInput;

    @Field(() => ReviewResponseWhereInput, {nullable:true})
    none?: ReviewResponseWhereInput;
}
