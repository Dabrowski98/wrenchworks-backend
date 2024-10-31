import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { AddressPerson } from '../address-person/address-person.model';
import { AddressWorkshop } from '../address-workshop/address-workshop.model';
import { AddressCount } from './address-count.output';

@ObjectType()
export class Address {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    addressId!: bigint;

    @Field(() => String, {nullable:false})
    country!: string;

    @Field(() => String, {nullable:false})
    region!: string;

    @Field(() => String, {nullable:false})
    city!: string;

    @Field(() => String, {nullable:true})
    street!: string | null;

    @Field(() => String, {nullable:false})
    buildingNo!: string;

    @Field(() => String, {nullable:true})
    flatNo!: string | null;

    @Field(() => String, {nullable:false})
    postCode!: string;

    @Field(() => [AddressPerson], {nullable:true})
    addressPersons?: Array<AddressPerson>;

    @Field(() => [AddressWorkshop], {nullable:true})
    addressWorkshops?: Array<AddressWorkshop>;

    @Field(() => AddressCount, {nullable:false})
    _count?: AddressCount;
}
