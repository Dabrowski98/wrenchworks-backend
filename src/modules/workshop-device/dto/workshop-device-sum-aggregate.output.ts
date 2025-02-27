import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';

@ObjectType()
export class WorkshopDeviceSumAggregate {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopDeviceId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    lastLoginBy?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    updatedBy?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    acceptedBy?: bigint | number;
}
