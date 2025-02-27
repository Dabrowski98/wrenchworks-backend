import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutSessionDataInput } from '../../user/dto/user-create-nested-one-without-session-data.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class SessionDataCreateInput {

    @Field(() => String, {nullable:false})
    sessionDataId!: string;

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

    @Field(() => String, {nullable:true})
    deviceSerialNumber?: string;

    @Field(() => Date, {nullable:true})
    issuedAt?: Date | string;

    @Field(() => Date, {nullable:false})
    expiresAt!: Date | string;

    @Field(() => UserCreateNestedOneWithoutSessionDataInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutSessionDataInput)
    @ValidateNested()
    user!: UserCreateNestedOneWithoutSessionDataInput;
}
