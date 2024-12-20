import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { User } from '../../user/dto/user.model';

@ObjectType()
export class SessionData {

    @Field(() => String, {nullable:false})
    sessionDataId!: string;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    userId!: bigint;

    @Field(() => String, {nullable:false})
    refreshToken!: string;

    @Field(() => String, {nullable:false})
    deviceId!: string;

    @Field(() => String, {nullable:true})
    deviceName!: string | null;

    @Field(() => String, {nullable:true})
    deviceInfo!: string | null;

    @Field(() => String, {nullable:true})
    ipAddress!: string | null;

    @Field(() => String, {nullable:true})
    deviceSerialNumber!: string | null;

    @Field(() => Date, {nullable:false})
    issuedAt!: Date;

    @Field(() => Date, {nullable:false})
    expiresAt!: Date;

    @Field(() => User, {nullable:false})
    user?: User;
}
