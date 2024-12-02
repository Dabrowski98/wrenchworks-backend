import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';

@InputType()
export class SessionDataUncheckedCreateWithoutUserInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    sessionDataId?: bigint | number;

    @Field(() => String, {nullable:false})
    refreshToken!: string;

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