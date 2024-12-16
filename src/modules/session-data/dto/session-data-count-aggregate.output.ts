import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SessionDataCountAggregate {

    @Field(() => Int, {nullable:false})
    sessionDataId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    refreshToken!: number;

    @Field(() => Int, {nullable:false})
    deviceId!: number;

    @Field(() => Int, {nullable:false})
    deviceName!: number;

    @Field(() => Int, {nullable:false})
    deviceInfo!: number;

    @Field(() => Int, {nullable:false})
    ipAddress!: number;

    @Field(() => Int, {nullable:false})
    deviceSerialNumber!: number;

    @Field(() => Int, {nullable:false})
    issuedAt!: number;

    @Field(() => Int, {nullable:false})
    expiresAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
