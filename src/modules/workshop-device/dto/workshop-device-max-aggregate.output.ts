import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';

@ObjectType()
export class WorkshopDeviceMaxAggregate {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopDeviceId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopId?: bigint | number;

    @Field(() => String, {nullable:true})
    serialNumber?: string;

    @Field(() => String, {nullable:true})
    deviceName?: string;

    @Field(() => Date, {nullable:true})
    lastLoginAt?: Date | string;

    @Field(() => String, {nullable:true})
    lastLoginBy?: bigint | number;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    updatedBy?: bigint | number;

    @Field(() => Date, {nullable:true})
    acceptedAt?: Date | string;

    @Field(() => String, {nullable:true})
    acceptedBy?: bigint | number;
}
