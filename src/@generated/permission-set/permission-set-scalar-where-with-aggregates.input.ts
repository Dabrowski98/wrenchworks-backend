import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../prisma/big-int-with-aggregates-filter.input';
import { BigIntNullableWithAggregatesFilter } from '../prisma/big-int-nullable-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class PermissionSetScalarWhereWithAggregatesInput {

    @Field(() => [PermissionSetScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PermissionSetScalarWhereWithAggregatesInput>;

    @Field(() => [PermissionSetScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PermissionSetScalarWhereWithAggregatesInput>;

    @Field(() => [PermissionSetScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PermissionSetScalarWhereWithAggregatesInput>;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    permissionSetId?: BigIntWithAggregatesFilter;

    @Field(() => BigIntNullableWithAggregatesFilter, {nullable:true})
    workshopId?: BigIntNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    setName?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    canReadWorkshopDetails?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    canUpdateWorkshopDetails?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    canModifyWorkshopDetails?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    canReadEmployees?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    canUpdateEmployees?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    canModifyEmployees?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    canReadCustomers?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    canUpdateCustomers?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    canModifyCustomers?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    canReadServices?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    canUpdateServices?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    canModifyServices?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    canReadTasks?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    canUpdateTasks?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    canModifyTasks?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    canReadReports?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    canGenerateReports?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    canModifyPermissions?: BoolWithAggregatesFilter;
}
