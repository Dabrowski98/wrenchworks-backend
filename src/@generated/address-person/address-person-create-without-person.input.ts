import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateNestedOneWithoutAddressPersonsInput } from '../address/address-create-nested-one-without-address-persons.input';

@InputType()
export class AddressPersonCreateWithoutPersonInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => AddressCreateNestedOneWithoutAddressPersonsInput, {nullable:false})
    address!: AddressCreateNestedOneWithoutAddressPersonsInput;
}
