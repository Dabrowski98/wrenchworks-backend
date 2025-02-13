import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { JoinWorkshopRequestStatus } from '../../prisma/dto/join-workshop-request-status.enum';
import { User } from '../../user/dto/user.model';
import { Workshop } from '../../workshop/dto/workshop.model';
import { Type } from 'class-transformer';
import { Employee } from '../../employee/dto/employee.model';

/**
 * The JoinWorkshopRequest model is used to manage requests for joining a workshop by employees or users.
 * It stores request status, messages, and references to the related user and workshop.
 */
@ObjectType({description:'The JoinWorkshopRequest model is used to manage requests for joining a workshop by employees or users.\nIt stores request status, messages, and references to the related user and workshop.'})
export class JoinWorkshopRequest {

    /**
     * Identifier of the join workshop request
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the join workshop request'})
    joinWorkshopRequestId!: bigint;

    /**
     * Identifier of the user receiving the request
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the user receiving the request'})
    receiverId!: bigint;

    /**
     * Identifier of the workshop
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the workshop'})
    workshopId!: bigint;

    /**
     * Identifier of the employee
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the employee'})
    employeeId!: bigint;

    /**
     * Message content of the request
     */
    @Field(() => String, {nullable:true,description:'Message content of the request'})
    message!: string | null;

    /**
     * Current status of the request
     * Note: Optional because field defaults to PENDING
     */
    @Field(() => JoinWorkshopRequestStatus, {nullable:false,defaultValue:'PENDING',description:'Current status of the request\nNote: Optional because field defaults to PENDING'})
    status!: keyof typeof JoinWorkshopRequestStatus;

    /**
     * Timestamp of creation
     */
    @Field(() => Date, {nullable:false,description:'Timestamp of creation'})
    createdAt!: Date;

    /**
     * Identifier of user who created the record
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:true,description:'Identifier of user who created the record'})
    createdBy!: bigint | null;

    /**
     * Timestamp of last update
     */
    @Field(() => Date, {nullable:true,description:'Timestamp of last update'})
    updatedAt!: Date | null;

    /**
     * Identifier of user who last updated the record
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:true,description:'Identifier of user who last updated the record'})
    updatedBy!: bigint | null;

    /**
     * Timestamp when request was resolved
     */
    @Field(() => Date, {nullable:true,description:'Timestamp when request was resolved'})
    resolvedAt!: Date | null;

    /**
     * User who received the request
     */
    @Field(() => User, {nullable:false,description:'User who received the request'})
    user?: User;

    /**
     * Workshop associated with the request
     */
    @Field(() => Workshop, {nullable:false,description:'Workshop associated with the request'})
    @Type(() => Workshop)
    workshop?: Workshop;

    /**
     * Employee who responded to the request
     */
    @Field(() => Employee, {nullable:false,description:'Employee who responded to the request'})
    @Type(() => Employee)
    employee?: Employee;
}
