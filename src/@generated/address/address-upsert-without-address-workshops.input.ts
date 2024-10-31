import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressUpdateWithoutAddressWorkshopsInput } from './address-update-without-address-workshops.input';
import { Type } from 'class-transformer';
import { AddressCreateWithoutAddressWorkshopsInput } from './address-create-without-address-workshops.input';
import { AddressWhereInput } from './address-where.input';

@InputType()
export class AddressUpsertWithoutAddressWorkshopsInput {

    @Field(() => AddressUpdateWithoutAddressWorkshopsInput, {nullable:false})
    @Type(() => AddressUpdateWithoutAddressWorkshopsInput)
    update!: AddressUpdateWithoutAddressWorkshopsInput;

    @Field(() => AddressCreateWithoutAddressWorkshopsInput, {nullable:false})
    @Type(() => AddressCreateWithoutAddressWorkshopsInput)
    create!: AddressCreateWithoutAddressWorkshopsInput;

    @Field(() => AddressWhereInput, {nullable:true})
    @Type(() => AddressWhereInput)
    where?: AddressWhereInput;
}
