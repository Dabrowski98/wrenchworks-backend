import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { WorkshopDeviceStatus } from '../../prisma/dto/workshop-device-status.enum';
import { Workshop } from '../../workshop/dto/workshop.model';
import { Type } from 'class-transformer';

/**
 * This model manages the devices associated with a workshop, including device names, serial numbers, and status.
 * It tracks device authentication data such as last login and update timestamps.
 */
@ObjectType({description:'This model manages the devices associated with a workshop, including device names, serial numbers, and status.\nIt tracks device authentication data such as last login and update timestamps.'})
export class WorkshopDevice {

    /**
     * Identifier of the workshop device
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the workshop device'})
    workshopDeviceId!: bigint;

    /**
     * Identifier of the associated workshop
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the associated workshop'})
    workshopId!: bigint;

    /**
     * Serial number of the device
     */
    @Field(() => String, {nullable:false,description:'Serial number of the device'})
    serialNumber!: string;

    /**
     * Name of the device
     */
    @Field(() => String, {nullable:false,description:'Name of the device'})
    deviceName!: string;

    /**
     * Current status of the device
     */
    @Field(() => WorkshopDeviceStatus, {nullable:true,defaultValue:'INACTIVE',description:'Current status of the device'})
    status!: keyof typeof WorkshopDeviceStatus | null;

    /**
     * Timestamp of last login
     */
    @Field(() => Date, {nullable:true,description:'Timestamp of last login'})
    lastLoginAt!: Date | null;

    /**
     * Identifier of user who last logged in
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:true,description:'Identifier of user who last logged in'})
    lastLoginBy!: bigint | null;

    /**
     * Timestamp of last update
     */
    @Field(() => Date, {nullable:true,description:'Timestamp of last update'})
    updatedAt!: Date | null;

    /**
     * Identifier of user who last updated the device
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:true,description:'Identifier of user who last updated the device'})
    updatedBy!: bigint | null;

    /**
     * Timestamp when device was accepted
     */
    @Field(() => Date, {nullable:true,description:'Timestamp when device was accepted'})
    acceptedAt!: Date | null;

    /**
     * Identifier of user who accepted the device
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:true,description:'Identifier of user who accepted the device'})
    acceptedBy!: bigint | null;

    /**
     * Workshop associated with this device
     */
    @Field(() => Workshop, {nullable:false,description:'Workshop associated with this device'})
    @Type(() => Workshop)
    workshop?: Workshop;
}
