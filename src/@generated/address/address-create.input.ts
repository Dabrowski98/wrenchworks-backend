import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { PersonCreateNestedManyWithoutAddressInput } from '../person/person-create-nested-many-without-address.input';
import { Type } from 'class-transformer';
import { WorkshopCreateNestedManyWithoutAddressesInput } from '../workshop/workshop-create-nested-many-without-addresses.input';

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

    @Field(() => PersonCreateNestedManyWithoutAddressInput, {nullable:true})
    @Type(() => PersonCreateNestedManyWithoutAddressInput)
    persons?: PersonCreateNestedManyWithoutAddressInput;

    @Field(() => WorkshopCreateNestedManyWithoutAddressesInput, {nullable:true})
    @Type(() => WorkshopCreateNestedManyWithoutAddressesInput)
    workshops?: WorkshopCreateNestedManyWithoutAddressesInput;
}
