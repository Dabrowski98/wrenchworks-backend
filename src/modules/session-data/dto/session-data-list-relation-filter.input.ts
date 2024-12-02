import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SessionDataWhereInput } from './session-data-where.input';

@InputType()
export class SessionDataListRelationFilter {

    @Field(() => SessionDataWhereInput, {nullable:true})
    every?: SessionDataWhereInput;

    @Field(() => SessionDataWhereInput, {nullable:true})
    some?: SessionDataWhereInput;

    @Field(() => SessionDataWhereInput, {nullable:true})
    none?: SessionDataWhereInput;
}
