import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateNestedOneWithoutAddressWorkshopsInput } from '../address/address-create-nested-one-without-address-workshops.input';

@InputType()
export class AddressWorkshopCreateWithoutWorkshopInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => AddressCreateNestedOneWithoutAddressWorkshopsInput, {nullable:false})
    address!: AddressCreateNestedOneWithoutAddressWorkshopsInput;
}
