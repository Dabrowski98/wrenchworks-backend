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

/**
 * The Employee model holds data related to workshop employees including login credentials and employment status.
 * It also defines associations with roles, permissions, and tasks within the system.
 */
@ObjectType({description:'The Employee model holds data related to workshop employees including login credentials and employment status.\nIt also defines associations with roles, permissions, and tasks within the system.'})
export class Employee {

    /**
     * Identifier of the employee
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the employee'})
    employeeId!: bigint;

    /**
     * Identifier of the workshop where employee works
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the workshop where employee works'})
    workshopId!: bigint;

    /**
     * Identifier of associated user account
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:true,description:'Identifier of associated user account'})
    userId!: bigint | null;

    /**
     * Display name for the employee
     */
    @Field(() => String, {nullable:true,description:'Display name for the employee'})
    nickname!: string | null;

    /**
     * Login username for employee
     */
    @Field(() => String, {nullable:false,description:'Login username for employee'})
    login!: string;

    /**
     * Password for employee account
     * Note: Password will be hashed before storage
     */
    /**
     * Token for session refresh
     */
    @Field(() => String, {nullable:true,description:'Token for session refresh'})
    refreshToken!: string | null;

    /**
     * Current status of employee account
     */
    @Field(() => EmployeeStatus, {nullable:false,defaultValue:'INACTIVE',description:'Current status of employee account'})
    status!: keyof typeof EmployeeStatus;

    /**
     * Date when employee joined
     * Note: Optional because field defaults to now()
     */
    @Field(() => Date, {nullable:false,description:'Date when employee joined\nNote: Optional because field defaults to now()'})
    joinedAt!: Date;

    /**
     * Timestamp of deletion
     */
    @Field(() => Date, {nullable:true,description:'Timestamp of deletion'})
    deletedAt!: Date | null;

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
     * Employee permissions
     */
    @Field(() => [EmployeePermission], {nullable:true,description:'Employee permissions'})
    permissions?: Array<EmployeePermission>;

    /**
     * Services managed by employee
     */
    @Field(() => [Service], {nullable:true,description:'Services managed by employee'})
    @Type(() => Service)
    services?: Array<Service>;

    /**
     * Workshop join requests by employee
     */
    @Field(() => [JoinWorkshopRequest], {nullable:true,description:'Workshop join requests by employee'})
    joinWorkshopRequests?: Array<JoinWorkshopRequest>;

    /**
     * Tasks assigned to employee
     */
    @Field(() => [Task], {nullable:true,description:'Tasks assigned to employee'})
    @Type(() => Task)
    tasks?: Array<Task>;

    /**
     * Associated user account
     * Note: Depends solely on join workshop request status.
     */
    @Field(() => User, {nullable:true,description:'Associated user account\nNote: Depends solely on join workshop request status.'})
    user?: User | null;

    /**
     * Workshop where employee works
     */
    @Field(() => Workshop, {nullable:false,description:'Workshop where employee works'})
    @Type(() => Workshop)
    workshop?: Workshop;

    @Field(() => EmployeeCount, {nullable:false})
    _count?: EmployeeCount;
}