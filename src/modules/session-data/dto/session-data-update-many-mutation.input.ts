import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class SessionDataUpdateManyMutationInput {

    @Field(() => String, {nullable:true})
    refreshToken?: string;

    @Field(() => String, {nullable:true})
    deviceId?: string;

    @Field(() => String, {nullable:true})
    deviceName?: string;

    @Field(() => String, {nullable:true})
    deviceInfo?: string;

    @Field(() => String, {nullable:true})
    ipAddress?: string;

    @Field(() => String, {nullable:true})
    deviceSerialNumber?: string;

    @Field(() => Date, {nullable:true})
    issuedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    expiresAt?: Date | string;
}