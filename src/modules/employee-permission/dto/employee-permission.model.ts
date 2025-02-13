import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { GraphQLJSON } from 'graphql-type-json';
import { Employee } from '../../employee/dto/employee.model';
import { Type } from 'class-transformer';
import { EmployeePermissionCount } from './employee-permission-count.output';

/**
 * This model represents EmployeePermission detailing the allowed actions and associated permissions for employees.
 * It is used to control access and operations within the application for different employee roles.
 */
@ObjectType({description:'This model represents EmployeePermission detailing the allowed actions and associated permissions for employees.\nIt is used to control access and operations within the application for different employee roles.'})
export class EmployeePermission {

    /**
     * Identifier of the permission
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the permission'})
    permissionId!: bigint;

    /**
     * Name of the permission
     */
    @Field(() => String, {nullable:false,description:'Name of the permission'})
    name!: string;

    /**
     * Description of the permission
     */
    @Field(() => String, {nullable:true,description:'Description of the permission'})
    description!: string | null;

    /**
     * Action allowed by this permission
     */
    @Field(() => String, {nullable:false,description:'Action allowed by this permission'})
    action!: string;

    /**
     * Subject of the permission
     */
    @Field(() => String, {nullable:false,description:'Subject of the permission'})
    subject!: string;

    /**
     * Additional conditions for permission
     */
    @Field(() => GraphQLJSON, {nullable:true,description:'Additional conditions for permission'})
    conditions!: any | null;

    /**
     * Timestamp of creation
     */
    @Field(() => Date, {nullable:false,description:'Timestamp of creation'})
    createdAt!: Date;

    /**
     * Timestamp of last update
     */
    @Field(() => Date, {nullable:false,description:'Timestamp of last update'})
    updatedAt!: Date;

    /**
     * Employees with this permission
     */
    @Field(() => [Employee], {nullable:true,description:'Employees with this permission'})
    @Type(() => Employee)
    employees?: Array<Employee>;

    @Field(() => EmployeePermissionCount, {nullable:false})
    _count?: EmployeePermissionCount;
}
