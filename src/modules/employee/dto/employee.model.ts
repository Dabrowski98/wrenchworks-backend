import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { HideField } from '@nestjs/graphql';
import { EmployeeStatus } from '../../prisma/dto/employee-status.enum';
import { EmployeePermission } from '../../employee-permission/dto/employee-permission.model';
import { Service } from '../../service/dto/service.model';
import { Type } from 'class-transformer';
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

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    nickname!: string | null;

    @Field(() => String, {nullable:false})
    login!: string;

    /**
     * Note: Password will be hashed before storage
     */
    @Field(() => String, {nullable:true})
    refreshToken!: string | null;

    @Field(() => EmployeeStatus, {nullable:false,defaultValue:'INACTIVE'})
    status!: keyof typeof EmployeeStatus;

    /**
     * Note: Optional because field defaults to now()
     */
    @Field(() => Date, {nullable:false,description:'Note: Optional because field defaults to now()'})
    joinedAt!: Date;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => String, {nullable:true})
    createdBy!: bigint | null;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => String, {nullable:true})
    updatedBy!: bigint | null;

    /**
     * Note: Connect or Create only allowed
     */
    @Field(() => [EmployeePermission], {nullable:true,description:'Note: Connect or Create only allowed'})
    permissions?: Array<EmployeePermission>;

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