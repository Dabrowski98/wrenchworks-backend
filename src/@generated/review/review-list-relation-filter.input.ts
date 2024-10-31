import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewWhereInput } from './review-where.input';
import { Type } from 'class-transformer';

@InputType()
export class ReviewListRelationFilter {

    @Field(() => ReviewWhereInput, {nullable:true})
    @Type(() => ReviewWhereInput)
    every?: ReviewWhereInput;

    @Field(() => ReviewWhereInput, {nullable:true})
    @Type(() => ReviewWhereInput)
    some?: ReviewWhereInput;

    @Field(() => ReviewWhereInput, {nullable:true})
    @Type(() => ReviewWhereInput)
    none?: ReviewWhereInput;
}
