import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { GraphQLJSON } from 'graphql-type-json';
import { Employee } from '../../employee/dto/employee.model';
import { Type } from 'class-transformer';
import { EmployeePermissionCount } from './employee-permission-count.output';

@ObjectType()
export class EmployeePermission {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    permissionId!: bigint;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => String, {nullable:false})
    action!: string;

    @Field(() => String, {nullable:false})
    subject!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    conditions!: any | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Employee], {nullable:true})
    @Type(() => Employee)
    employees?: Array<Employee>;

    @Field(() => EmployeePermissionCount, {nullable:false})
    _count?: EmployeePermissionCount;
}
