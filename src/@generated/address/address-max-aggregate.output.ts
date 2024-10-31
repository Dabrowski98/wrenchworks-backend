import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';

@ObjectType()
export class AddressMaxAggregate {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    addressId?: bigint | number;

    @Field(() => String, {nullable:true})
    country?: string;

    @Field(() => String, {nullable:true})
    region?: string;

    @Field(() => String, {nullable:true})
    city?: string;

    @Field(() => String, {nullable:true})
    street?: string;

    @Field(() => String, {nullable:true})
    buildingNo?: string;

    @Field(() => String, {nullable:true})
    flatNo?: string;

    @Field(() => String, {nullable:true})
    postCode?: string;
}
