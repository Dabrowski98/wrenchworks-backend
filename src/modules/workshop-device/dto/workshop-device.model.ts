import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { WorkshopDeviceStatus } from '../../prisma/dto/workshop-device-status.enum';
import { Workshop } from '../../workshop/dto/workshop.model';
import { Type } from 'class-transformer';

@ObjectType()
export class WorkshopDevice {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopDeviceId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint;

    @Field(() => String, {nullable:false})
    serialNumber!: string;

    @Field(() => String, {nullable:false})
    deviceName!: string;

    @Field(() => WorkshopDeviceStatus, {nullable:true,defaultValue:'ACTIVE'})
    status!: keyof typeof WorkshopDeviceStatus | null;

    @Field(() => Date, {nullable:true})
    lastLoginAt!: Date | null;

    @Field(() => String, {nullable:true})
    lastLoginBy!: bigint | null;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => String, {nullable:true})
    updatedBy!: bigint | null;

    @Field(() => Date, {nullable:true})
    acceptedAt!: Date | null;

    @Field(() => String, {nullable:true})
    acceptedBy!: bigint | null;

    @Field(() => Workshop, {nullable:false})
    @Type(() => Workshop)
    workshop?: Workshop;
}
