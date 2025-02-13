import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { WorkshopDeviceStatus } from '../../prisma/dto/workshop-device-status.enum';

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

    @Field(() => WorkshopDeviceStatus, {nullable:true})
    status?: keyof typeof WorkshopDeviceStatus;

    @Field(() => Date, {nullable:true})
    lastLoginAt?: Date | string;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    lastLoginBy?: bigint | number;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    updatedBy?: bigint | number;

    @Field(() => Date, {nullable:true})
    acceptedAt?: Date | string;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    acceptedBy?: bigint | number;
}
