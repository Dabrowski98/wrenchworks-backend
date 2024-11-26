import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { HideField } from '@nestjs/graphql';
import { EmployeeOrderByRelationAggregateInput } from '../../employee/dto/employee-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopOrderByWithRelationInput } from '../../workshop/dto/workshop-order-by-with-relation.input';

@InputType()
export class PermissionSetOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    permissionSetId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    workshopId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    setName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    canReadWorkshopDetails?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    canUpdateWorkshopDetails?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    canModifyWorkshopDetails?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    canReadEmployees?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    canUpdateEmployees?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    canModifyEmployees?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    canReadCustomers?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    canUpdateCustomers?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    canModifyCustomers?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    canReadServices?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    canUpdateServices?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    canModifyServices?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    canReadTasks?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    canUpdateTasks?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    canModifyTasks?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    canReadReports?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    canGenerateReports?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    canModifyPermissions?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: SortOrderInput;

    @HideField()
    updatedBy?: SortOrderInput;

    @Field(() => EmployeeOrderByRelationAggregateInput, {nullable:true})
    @Type(() => EmployeeOrderByRelationAggregateInput)
    @ValidateNested()
    @Type(() => EmployeeOrderByRelationAggregateInput)
    employees?: EmployeeOrderByRelationAggregateInput;

    @Field(() => WorkshopOrderByWithRelationInput, {nullable:true})
    @Type(() => WorkshopOrderByWithRelationInput)
    @ValidateNested()
    @Type(() => WorkshopOrderByWithRelationInput)
    workshop?: WorkshopOrderByWithRelationInput;
}
