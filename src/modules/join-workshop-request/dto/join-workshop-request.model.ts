import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { JoinWorkshopRequestStatus } from '../../prisma/dto/join-workshop-request-status.enum';
import { User } from '../../user/dto/user.model';
import { Workshop } from '../../workshop/dto/workshop.model';
import { Type } from 'class-transformer';
import { Employee } from '../../employee/dto/employee.model';

/**
 * Note: Do not allow receiver to update this model apart from status.
 */
@ObjectType({description:'Note: Do not allow receiver to update this model apart from status.'})
export class JoinWorkshopRequest {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    joinWorkshopRequestId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    receiverId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    employeeId!: bigint;

    @Field(() => String, {nullable:true})
    message!: string | null;

    /**
     * Note: Optional because field defaults to PENDING
     */
    @Field(() => JoinWorkshopRequestStatus, {nullable:false,defaultValue:'PENDING',description:'Note: Optional because field defaults to PENDING'})
    status!: keyof typeof JoinWorkshopRequestStatus;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => String, {nullable:true})
    createdBy!: bigint | null;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => String, {nullable:true})
    updatedBy!: bigint | null;

    @Field(() => Date, {nullable:true})
    resolvedAt!: Date | null;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Workshop, {nullable:false})
    @Type(() => Workshop)
    workshop?: Workshop;

    @Field(() => Employee, {nullable:false})
    @Type(() => Employee)
    employee?: Employee;
}
