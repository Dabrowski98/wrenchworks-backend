import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Address } from '../address/address.model';
import { Workshop } from '../workshop/workshop.model';

@ObjectType()
export class AddressWorkshop {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    addressId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Address, {nullable:false})
    address?: Address;

    @Field(() => Workshop, {nullable:false})
    workshop?: Workshop;
}
