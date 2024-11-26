import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../../prisma/dto/int-filter.input';
import { BigIntNullableFilter } from '../../prisma/dto/big-int-nullable-filter.input';
import { StringFilter } from '../../prisma/dto/string-filter.input';
import { BoolFilter } from '../../prisma/dto/bool-filter.input';
import { DateTimeNullableFilter } from '../../prisma/dto/date-time-nullable-filter.input';
import { HideField } from 'nestjs-graphql';
import { EmployeeListRelationFilter } from '../../employee/dto/employee-list-relation-filter.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopNullableRelationFilter } from '../../workshop/dto/workshop-nullable-relation-filter.input';

@InputType()
export class PermissionSetWhereInput {

    @Field(() => [PermissionSetWhereInput], {nullable:true})
    AND?: Array<PermissionSetWhereInput>;

    @Field(() => [PermissionSetWhereInput], {nullable:true})
    OR?: Array<PermissionSetWhereInput>;

    @Field(() => [PermissionSetWhereInput], {nullable:true})
    NOT?: Array<PermissionSetWhereInput>;

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

    @Field(() => DateTimeNullableFilter, {nullable:true})
    @HideField()
    updatedAt?: DateTimeNullableFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    @HideField()
    updatedBy?: BigIntNullableFilter;

    @Field(() => EmployeeListRelationFilter, {nullable:true})
    @Type(() => EmployeeListRelationFilter)
    @ValidateNested()
    @Type(() => EmployeeListRelationFilter)
    employees?: EmployeeListRelationFilter;

    @Field(() => WorkshopNullableRelationFilter, {nullable:true})
    @Type(() => WorkshopNullableRelationFilter)
    @ValidateNested()
    @Type(() => WorkshopNullableRelationFilter)
    workshop?: WorkshopNullableRelationFilter;
}
