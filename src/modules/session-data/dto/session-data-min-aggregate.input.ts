import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SessionDataMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    sessionDataId?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    refreshToken?: true;

    @Field(() => Boolean, {nullable:true})
    deviceId?: true;

    @Field(() => Boolean, {nullable:true})
    deviceName?: true;

    @Field(() => Boolean, {nullable:true})
    deviceInfo?: true;

    @Field(() => Boolean, {nullable:true})
    ipAddress?: true;

    @Field(() => Boolean, {nullable:true})
    issuedAt?: true;

    @Field(() => Boolean, {nullable:true})
    expiresAt?: true;

    @Field(() => Boolean, {nullable:true})
    revoked?: true;
}
