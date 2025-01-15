import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class WorkshopDeviceCountAggregate {

    @Field(() => Int, {nullable:false})
    workshopDeviceId!: number;

    @Field(() => Int, {nullable:false})
    workshopId!: number;

    @Field(() => Int, {nullable:false})
    serialNumber!: number;

    @Field(() => Int, {nullable:false})
    deviceName!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    lastLoginAt!: number;

    @Field(() => Int, {nullable:false})
    lastLoginBy!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    updatedBy!: number;

    @Field(() => Int, {nullable:false})
    acceptedAt!: number;

    @Field(() => Int, {nullable:false})
    acceptedBy!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
