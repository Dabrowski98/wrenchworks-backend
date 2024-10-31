import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateNestedOneWithoutAddressWorkshopsInput } from '../address/address-create-nested-one-without-address-workshops.input';
import { WorkshopCreateNestedOneWithoutWorkshopAddressesInput } from '../workshop/workshop-create-nested-one-without-workshop-addresses.input';
import { Type } from 'class-transformer';

@InputType()
export class AddressWorkshopCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => AddressCreateNestedOneWithoutAddressWorkshopsInput, {nullable:false})
    address!: AddressCreateNestedOneWithoutAddressWorkshopsInput;

    @Field(() => WorkshopCreateNestedOneWithoutWorkshopAddressesInput, {nullable:false})
    @Type(() => WorkshopCreateNestedOneWithoutWorkshopAddressesInput)
    workshop!: WorkshopCreateNestedOneWithoutWorkshopAddressesInput;
}
