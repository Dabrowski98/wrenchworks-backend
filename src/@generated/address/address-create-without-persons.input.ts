import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { WorkshopCreateNestedManyWithoutAddressesInput } from '../workshop/workshop-create-nested-many-without-addresses.input';
import { Type } from 'class-transformer';

@InputType()
export class AddressCreateWithoutPersonsInput {

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

    @Field(() => WorkshopCreateNestedManyWithoutAddressesInput, {nullable:true})
    @Type(() => WorkshopCreateNestedManyWithoutAddressesInput)
    workshops?: WorkshopCreateNestedManyWithoutAddressesInput;
}
