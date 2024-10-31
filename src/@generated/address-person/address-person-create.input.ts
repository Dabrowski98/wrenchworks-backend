import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateNestedOneWithoutAddressPersonsInput } from '../address/address-create-nested-one-without-address-persons.input';
import { PersonCreateNestedOneWithoutPersonAddressesInput } from '../person/person-create-nested-one-without-person-addresses.input';
import { Type } from 'class-transformer';

@InputType()
export class AddressPersonCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => AddressCreateNestedOneWithoutAddressPersonsInput, {nullable:false})
    address!: AddressCreateNestedOneWithoutAddressPersonsInput;

    @Field(() => PersonCreateNestedOneWithoutPersonAddressesInput, {nullable:false})
    @Type(() => PersonCreateNestedOneWithoutPersonAddressesInput)
    person!: PersonCreateNestedOneWithoutPersonAddressesInput;
}
