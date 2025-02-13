import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { User } from '../../user/dto/user.model';

/**
 * This model represents SessionData for managing user sessions, refresh tokens and device information.
 * It is utilized for maintaining secure user login sessions across the application.
 */
@ObjectType({description:'This model represents SessionData for managing user sessions, refresh tokens and device information.\nIt is utilized for maintaining secure user login sessions across the application.'})
export class SessionData {

    /**
     * Identifier of the session
     */
    @Field(() => String, {nullable:false,description:'Identifier of the session'})
    sessionDataId!: string;

    /**
     * Identifier of the user
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the user'})
    userId!: bigint;

    /**
     * Token for session refresh
     */
    @Field(() => String, {nullable:false,description:'Token for session refresh'})
    refreshToken!: string;

    /**
     * Unique identifier of the device
     */
    @Field(() => String, {nullable:false,description:'Unique identifier of the device'})
    deviceId!: string;

    /**
     * Name of the device
     */
    @Field(() => String, {nullable:true,description:'Name of the device'})
    deviceName!: string | null;

    /**
     * Additional device information
     */
    @Field(() => String, {nullable:true,description:'Additional device information'})
    deviceInfo!: string | null;

    /**
     * IP address of the device
     */
    @Field(() => String, {nullable:true,description:'IP address of the device'})
    ipAddress!: string | null;

    /**
     * Serial number of the device
     */
    @Field(() => String, {nullable:true,description:'Serial number of the device'})
    deviceSerialNumber!: string | null;

    /**
     * Timestamp when session was issued
     */
    @Field(() => Date, {nullable:false,description:'Timestamp when session was issued'})
    issuedAt!: Date;

    /**
     * Timestamp when session expires
     */
    @Field(() => Date, {nullable:false,description:'Timestamp when session expires'})
    expiresAt!: Date;

    /**
     * User associated with this session
     */
    @Field(() => User, {nullable:false,description:'User associated with this session'})
    user?: User;
}
