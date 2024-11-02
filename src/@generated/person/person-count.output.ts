import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PersonCount {

    @Field(() => Int, {nullable:false})
    addresses?: number;

    @Field(() => Int, {nullable:false})
    customers?: number;

    @Field(() => Int, {nullable:false})
    employees?: number;

    @Field(() => Int, {nullable:false})
    serviceRequests?: number;

    @Field(() => Int, {nullable:false})
    vehicles?: number;

    @Field(() => Int, {nullable:false})
    workshops?: number;
}
