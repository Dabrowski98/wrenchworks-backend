import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Address } from '../address/address.model';
import { Person } from '../person/person.model';

@ObjectType()
export class AddressPerson {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    addressId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    personId!: bigint;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Address, {nullable:false})
    address?: Address;

    @Field(() => Person, {nullable:false})
    person?: Person;
}
