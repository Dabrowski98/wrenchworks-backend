import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class PermissionSetMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    permissionSetId?: true;

    @Field(() => Boolean, {nullable:true})
    workshopId?: true;

    @Field(() => Boolean, {nullable:true})
    setName?: true;

    @Field(() => Boolean, {nullable:true})
    canReadWorkshopDetails?: true;

    @Field(() => Boolean, {nullable:true})
    canUpdateWorkshopDetails?: true;

    @Field(() => Boolean, {nullable:true})
    canModifyWorkshopDetails?: true;

    @Field(() => Boolean, {nullable:true})
    canReadEmployees?: true;

    @Field(() => Boolean, {nullable:true})
    canUpdateEmployees?: true;

    @Field(() => Boolean, {nullable:true})
    canModifyEmployees?: true;

    @Field(() => Boolean, {nullable:true})
    canReadCustomers?: true;

    @Field(() => Boolean, {nullable:true})
    canUpdateCustomers?: true;

    @Field(() => Boolean, {nullable:true})
    canModifyCustomers?: true;

    @Field(() => Boolean, {nullable:true})
    canReadServices?: true;

    @Field(() => Boolean, {nullable:true})
    canUpdateServices?: true;

    @Field(() => Boolean, {nullable:true})
    canModifyServices?: true;

    @Field(() => Boolean, {nullable:true})
    canReadTasks?: true;

    @Field(() => Boolean, {nullable:true})
    canUpdateTasks?: true;

    @Field(() => Boolean, {nullable:true})
    canModifyTasks?: true;

    @Field(() => Boolean, {nullable:true})
    canReadReports?: true;

    @Field(() => Boolean, {nullable:true})
    canGenerateReports?: true;

    @Field(() => Boolean, {nullable:true})
    canModifyPermissions?: true;

    @HideField()
    updatedAt?: true;

    @HideField()
    updatedBy?: true;
}
