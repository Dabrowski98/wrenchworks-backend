import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressUpdateWithoutAddressPersonsInput } from './address-update-without-address-persons.input';
import { Type } from 'class-transformer';
import { AddressCreateWithoutAddressPersonsInput } from './address-create-without-address-persons.input';
import { AddressWhereInput } from './address-where.input';

@InputType()
export class AddressUpsertWithoutAddressPersonsInput {

    @Field(() => AddressUpdateWithoutAddressPersonsInput, {nullable:false})
    @Type(() => AddressUpdateWithoutAddressPersonsInput)
    update!: AddressUpdateWithoutAddressPersonsInput;

    @Field(() => AddressCreateWithoutAddressPersonsInput, {nullable:false})
    @Type(() => AddressCreateWithoutAddressPersonsInput)
    create!: AddressCreateWithoutAddressPersonsInput;

    @Field(() => AddressWhereInput, {nullable:true})
    @Type(() => AddressWhereInput)
    where?: AddressWhereInput;
}
