import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Workshop } from '../../workshop/dto/workshop.model';
import { Type } from 'class-transformer';

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

    @Field(() => Workshop, {nullable:true})
    @Type(() => Workshop)
    workshop?: Workshop | null;
}
