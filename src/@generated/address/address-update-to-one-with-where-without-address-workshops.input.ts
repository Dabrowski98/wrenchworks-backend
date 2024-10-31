import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressWhereInput } from './address-where.input';
import { Type } from 'class-transformer';
import { AddressUpdateWithoutAddressWorkshopsInput } from './address-update-without-address-workshops.input';

@InputType()
export class AddressUpdateToOneWithWhereWithoutAddressWorkshopsInput {

    @Field(() => AddressWhereInput, {nullable:true})
    @Type(() => AddressWhereInput)
    where?: AddressWhereInput;

    @Field(() => AddressUpdateWithoutAddressWorkshopsInput, {nullable:false})
    @Type(() => AddressUpdateWithoutAddressWorkshopsInput)
    data!: AddressUpdateWithoutAddressWorkshopsInput;
}
