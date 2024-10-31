import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { PermissionSet } from '../permission-set/permission-set.model';
import { Workshop } from '../workshop/workshop.model';
import { Person } from '../person/person.model';
import { Service } from '../service/service.model';
import { EmployeeTask } from '../employee-task/employee-task.model';
import { EmployeeCount } from './employee-count.output';

@ObjectType()
export class Employee {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    employeeId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint;

    @Field(() => Date, {nullable:false})
    joinedAt!: Date;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => String, {nullable:true})
    permissionSetId!: bigint | null;

    @Field(() => PermissionSet, {nullable:true})
    permissionSet?: PermissionSet | null;

    @Field(() => Workshop, {nullable:false})
    workshop?: Workshop;

    @Field(() => Person, {nullable:false})
    person?: Person;

    @Field(() => [Service], {nullable:true})
    services?: Array<Service>;

    @Field(() => [EmployeeTask], {nullable:true})
    employeeTasks?: Array<EmployeeTask>;

    @Field(() => EmployeeCount, {nullable:false})
    _count?: EmployeeCount;
}
