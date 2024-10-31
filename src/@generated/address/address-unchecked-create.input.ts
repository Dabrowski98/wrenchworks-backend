import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { AddressPersonUncheckedCreateNestedManyWithoutAddressInput } from '../address-person/address-person-unchecked-create-nested-many-without-address.input';
import { AddressWorkshopUncheckedCreateNestedManyWithoutAddressInput } from '../address-workshop/address-workshop-unchecked-create-nested-many-without-address.input';

@InputType()
export class AddressUncheckedCreateInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
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

    @Field(() => AddressPersonUncheckedCreateNestedManyWithoutAddressInput, {nullable:true})
    addressPersons?: AddressPersonUncheckedCreateNestedManyWithoutAddressInput;

    @Field(() => AddressWorkshopUncheckedCreateNestedManyWithoutAddressInput, {nullable:true})
    addressWorkshops?: AddressWorkshopUncheckedCreateNestedManyWithoutAddressInput;
}
