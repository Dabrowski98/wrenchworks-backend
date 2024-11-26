import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { HideField } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PermissionSet } from '../../permission-set/dto/permission-set.model';
import { Type } from 'class-transformer';
import { Service } from '../../service/dto/service.model';
import { JoinWorkshopRequest } from '../../join-workshop-request/dto/join-workshop-request.model';
import { Task } from '../../task/dto/task.model';
import { User } from '../../user/dto/user.model';
import { Workshop } from '../../workshop/dto/workshop.model';
import { EmployeeCount } from './employee-count.output';

@ObjectType()
export class Employee {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    employeeId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    userId!: bigint | null;

    @Field(() => String, {nullable:true})
    nickname!: string | null;

    @Field(() => String, {nullable:false})
    login!: string;

    /**
     * Note: Password will be hashed before storage
     */
    @HideField()
    password!: string;

    @Field(() => Int, {nullable:true})
    permissionSetId!: number | null;

    /**
     * Note: Optional because field defaults to now()
     */
    @Field(() => Date, {nullable:false,description:'Note: Optional because field defaults to now()'})
    joinedAt!: Date;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    createdAt!: Date | null;

    @Field(() => String, {nullable:true})
    createdBy!: bigint | null;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => String, {nullable:true})
    updatedBy!: bigint | null;

    @Field(() => PermissionSet, {nullable:true})
    @Type(() => PermissionSet)
    permissionSet?: PermissionSet | null;

    @Field(() => [Service], {nullable:true})
    @Type(() => Service)
    services?: Array<Service>;

    @Field(() => [JoinWorkshopRequest], {nullable:true})
    joinWorkshopRequests?: Array<JoinWorkshopRequest>;

    @Field(() => [Task], {nullable:true})
    @Type(() => Task)
    tasks?: Array<Task>;

    /**
     * Note: Depends solely on join workshop request status.
     */
    @Field(() => User, {nullable:true,description:'Note: Depends solely on join workshop request status.'})
    user?: User | null;

    @Field(() => Workshop, {nullable:false})
    @Type(() => Workshop)
    workshop?: Workshop;

    @Field(() => EmployeeCount, {nullable:false})
    _count?: EmployeeCount;
}
