import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressWhereInput } from './address-where.input';
import { Type } from 'class-transformer';
import { AddressUpdateWithoutAddressPersonsInput } from './address-update-without-address-persons.input';

@InputType()
export class AddressUpdateToOneWithWhereWithoutAddressPersonsInput {

    @Field(() => AddressWhereInput, {nullable:true})
    @Type(() => AddressWhereInput)
    where?: AddressWhereInput;

    @Field(() => AddressUpdateWithoutAddressPersonsInput, {nullable:false})
    @Type(() => AddressUpdateWithoutAddressPersonsInput)
    data!: AddressUpdateWithoutAddressPersonsInput;
}
