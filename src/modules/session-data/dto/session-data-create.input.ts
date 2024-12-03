import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutSessionDataInput } from '../../user/dto/user-create-nested-one-without-session-data.input';
import { Type } from 'class-transformer';

@InputType()
export class SessionDataCreateInput {

    @Field(() => String, {nullable:false})
    refreshToken!: string;

    @Field(() => String, {nullable:false})
    deviceId!: string;

    @Field(() => String, {nullable:true})
    deviceName?: string;

    @Field(() => String, {nullable:true})
    deviceInfo?: string;

    @Field(() => String, {nullable:true})
    ipAddress?: string;

    @Field(() => Date, {nullable:true})
    issuedAt?: Date | string;

    @Field(() => Date, {nullable:false})
    expiresAt!: Date | string;

    @Field(() => Boolean, {nullable:true})
    revoked?: boolean;

    @Field(() => UserCreateNestedOneWithoutSessionDataInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutSessionDataInput)
    user!: UserCreateNestedOneWithoutSessionDataInput;
}