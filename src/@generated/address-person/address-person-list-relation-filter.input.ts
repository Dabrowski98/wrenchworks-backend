import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressPersonWhereInput } from './address-person-where.input';

@InputType()
export class AddressPersonListRelationFilter {

    @Field(() => AddressPersonWhereInput, {nullable:true})
    every?: AddressPersonWhereInput;

    @Field(() => AddressPersonWhereInput, {nullable:true})
    some?: AddressPersonWhereInput;

    @Field(() => AddressPersonWhereInput, {nullable:true})
    none?: AddressPersonWhereInput;
}
