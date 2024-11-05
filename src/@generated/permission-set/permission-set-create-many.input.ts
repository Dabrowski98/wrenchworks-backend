import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';

@InputType()
export class PermissionSetCreateManyInput {

    @HideField()
    permissionSetId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopId?: bigint | number;

    @Field(() => String, {nullable:true})
    setName?: string;

    @Field(() => Boolean, {nullable:true})
    canReadWorkshopDetails?: boolean;

    @Field(() => Boolean, {nullable:true})
    canUpdateWorkshopDetails?: boolean;

    @Field(() => Boolean, {nullable:true})
    canModifyWorkshopDetails?: boolean;

    @Field(() => Boolean, {nullable:true})
    canReadEmployees?: boolean;

    @Field(() => Boolean, {nullable:true})
    canUpdateEmployees?: boolean;

    @Field(() => Boolean, {nullable:true})
    canModifyEmployees?: boolean;

    @Field(() => Boolean, {nullable:true})
    canReadCustomers?: boolean;

    @Field(() => Boolean, {nullable:true})
    canUpdateCustomers?: boolean;

    @Field(() => Boolean, {nullable:true})
    canModifyCustomers?: boolean;

    @Field(() => Boolean, {nullable:true})
    canReadServices?: boolean;

    @Field(() => Boolean, {nullable:true})
    canUpdateServices?: boolean;

    @Field(() => Boolean, {nullable:true})
    canModifyServices?: boolean;

    @Field(() => Boolean, {nullable:true})
    canReadTasks?: boolean;

    @Field(() => Boolean, {nullable:true})
    canUpdateTasks?: boolean;

    @Field(() => Boolean, {nullable:true})
    canModifyTasks?: boolean;

    @Field(() => Boolean, {nullable:true})
    canReadReports?: boolean;

    @Field(() => Boolean, {nullable:true})
    canGenerateReports?: boolean;

    @Field(() => Boolean, {nullable:true})
    canModifyPermissions?: boolean;
}
