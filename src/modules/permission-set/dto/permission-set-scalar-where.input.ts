import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../../prisma/dto/int-filter.input';
import { BigIntNullableFilter } from '../../prisma/dto/big-int-nullable-filter.input';
import { StringFilter } from '../../prisma/dto/string-filter.input';
import { BoolFilter } from '../../prisma/dto/bool-filter.input';
import { DateTimeFilter } from '../../prisma/dto/date-time-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class PermissionSetScalarWhereInput {

    @Field(() => [PermissionSetScalarWhereInput], {nullable:true})
    AND?: Array<PermissionSetScalarWhereInput>;

    @Field(() => [PermissionSetScalarWhereInput], {nullable:true})
    OR?: Array<PermissionSetScalarWhereInput>;

    @Field(() => [PermissionSetScalarWhereInput], {nullable:true})
    NOT?: Array<PermissionSetScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    permissionSetId?: IntFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    workshopId?: BigIntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    setName?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    canReadWorkshopDetails?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    canUpdateWorkshopDetails?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    canModifyWorkshopDetails?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    canReadEmployees?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    canUpdateEmployees?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    canModifyEmployees?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    canReadCustomers?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    canUpdateCustomers?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    canModifyCustomers?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    canReadServices?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    canUpdateServices?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    canModifyServices?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    canReadTasks?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    canUpdateTasks?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    canModifyTasks?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    canReadReports?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    canGenerateReports?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    canModifyPermissions?: BoolFilter;

    }