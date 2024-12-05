import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SessionDataUncheckedCreateWithoutUserInput {

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

    @Field(() => Date, {nullable:true})
    issuedAt?: Date | string;

    @Field(() => Date, {nullable:false})
    expiresAt!: Date | string;

    @Field(() => Boolean, {nullable:true})
    revoked?: boolean;
}
