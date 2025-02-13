import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Workshop } from '../../workshop/dto/workshop.model';
import { Type } from 'class-transformer';

/**
 * The WorkshopDeviceOtp model handles one-time passwords for workshop devices used for secure authentication.
 * It includes the OTP code, expiry time, and links to the associated workshop for verification.
 */
@ObjectType({description:'The WorkshopDeviceOtp model handles one-time passwords for workshop devices used for secure authentication.\nIt includes the OTP code, expiry time, and links to the associated workshop for verification.'})
export class WorkshopDeviceOtp {

    /**
     * Identifier of the workshop device OTP record
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the workshop device OTP record'})
    WorkshopDeviceOtpId!: bigint;

    /**
     * Identifier of the employee associated with the OTP
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:true,description:'Identifier of the employee associated with the OTP'})
    employeeId!: bigint | null;

    /**
     * Identifier of the workshop
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the workshop'})
    workshopId!: bigint;

    /**
     * One-time password code
     */
    @Field(() => String, {nullable:false,description:'One-time password code'})
    code!: string;

    /**
     * Timestamp when OTP expires
     */
    @Field(() => Date, {nullable:false,description:'Timestamp when OTP expires'})
    expiresAt!: Date;

    /**
     * Timestamp of OTP creation
     */
    @Field(() => Date, {nullable:false,description:'Timestamp of OTP creation'})
    createdAt!: Date;

    /**
     * Workshop associated with this OTP
     */
    @Field(() => Workshop, {nullable:false,description:'Workshop associated with this OTP'})
    @Type(() => Workshop)
    workshop?: Workshop;
}
