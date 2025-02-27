import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class WorkshopDeviceOtpCountAggregate {

    @Field(() => Int, {nullable:false})
    WorkshopDeviceOtpId!: number;

    @Field(() => Int, {nullable:false})
    employeeId!: number;

    @Field(() => Int, {nullable:false})
    workshopId!: number;

    @Field(() => Int, {nullable:false})
    code!: number;

    @Field(() => Int, {nullable:false})
    expiresAt!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
