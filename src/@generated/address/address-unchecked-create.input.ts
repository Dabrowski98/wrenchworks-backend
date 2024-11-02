import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { PersonUncheckedCreateNestedManyWithoutAddressesInput } from '../person/person-unchecked-create-nested-many-without-addresses.input';
import { Type } from 'class-transformer';
import { WorkshopUncheckedCreateNestedManyWithoutAddressesInput } from '../workshop/workshop-unchecked-create-nested-many-without-addresses.input';

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

    @Field(() => PersonUncheckedCreateNestedManyWithoutAddressesInput, {nullable:true})
    @Type(() => PersonUncheckedCreateNestedManyWithoutAddressesInput)
    persons?: PersonUncheckedCreateNestedManyWithoutAddressesInput;

    @Field(() => WorkshopUncheckedCreateNestedManyWithoutAddressesInput, {nullable:true})
    @Type(() => WorkshopUncheckedCreateNestedManyWithoutAddressesInput)
    workshops?: WorkshopUncheckedCreateNestedManyWithoutAddressesInput;
}
