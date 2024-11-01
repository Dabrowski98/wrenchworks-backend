import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { AddressPersonCreateNestedManyWithoutAddressInput } from '../address-person/address-person-create-nested-many-without-address.input';
import { AddressWorkshopCreateNestedManyWithoutAddressInput } from '../address-workshop/address-workshop-create-nested-many-without-address.input';

@InputType()
export class AddressCreateInput {

    @HideField()
    addressId?: bigint | number;

    @Field(() => String, {nullable:false})
    country!: string;

    @Field(() => String, {nullable:false})
    region!: string;

    @Field(() => String, {nullable:false})
    city!: string;

    @Field(() => String, {nullable:true})
    street?: string;

    @Field(() => String, {nullable:false})
    buildingNo!: string;

    @Field(() => String, {nullable:true})
    flatNo?: string;

    @Field(() => String, {nullable:false})
    postCode!: string;

    @Field(() => AddressPersonCreateNestedManyWithoutAddressInput, {nullable:true})
    addressPersons?: AddressPersonCreateNestedManyWithoutAddressInput;

    @Field(() => AddressWorkshopCreateNestedManyWithoutAddressInput, {nullable:true})
    addressWorkshops?: AddressWorkshopCreateNestedManyWithoutAddressInput;
}
