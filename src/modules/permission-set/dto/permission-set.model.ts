import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Employee } from '../../employee/dto/employee.model';
import { Workshop } from '../../workshop/dto/workshop.model';
import { PermissionSetCount } from './permission-set-count.output';

@ObjectType()
export class PermissionSet {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    permissionSetId!: number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopId!: bigint | null;

    @Field(() => String, {nullable:false,defaultValue:'CUSTOM'})
    setName!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    canReadWorkshopDetails!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    canUpdateWorkshopDetails!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    canModifyWorkshopDetails!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    canReadEmployees!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    canUpdateEmployees!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    canModifyEmployees!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    canReadCustomers!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    canUpdateCustomers!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    canModifyCustomers!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    canReadServices!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    canUpdateServices!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    canModifyServices!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    canReadTasks!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    canUpdateTasks!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    canModifyTasks!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    canReadReports!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    canGenerateReports!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    canModifyPermissions!: boolean;

    @Field(() => [Employee], {nullable:true})
    employees?: Array<Employee>;

    @Field(() => Workshop, {nullable:true})
    workshop?: Workshop | null;

    @Field(() => PermissionSetCount, {nullable:false})
    _count?: PermissionSetCount;
}
