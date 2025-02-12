import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutSessionDataNestedInput } from '../../user/dto/user-update-one-required-without-session-data-nested.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class SessionDataUpdateInput {

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

    @Field(() => UserUpdateOneRequiredWithoutSessionDataNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutSessionDataNestedInput)
    @ValidateNested()
    user?: UserUpdateOneRequiredWithoutSessionDataNestedInput;
}