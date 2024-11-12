import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AddressCountAggregate {

    @Field(() => Int, {nullable:false})
    addressId!: number;

    @Field(() => Int, {nullable:false})
    country!: number;

    @Field(() => Int, {nullable:false})
    region!: number;

    @Field(() => Int, {nullable:false})
    city!: number;

    @Field(() => Int, {nullable:false})
    street!: number;

    @Field(() => Int, {nullable:false})
    buildingNo!: number;

    @Field(() => Int, {nullable:false})
    flatNo!: number;

    @Field(() => Int, {nullable:false})
    postCode!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
