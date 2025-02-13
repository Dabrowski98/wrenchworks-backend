import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { StringFilter } from '../../prisma/dto/string-filter.input';
import { StringNullableFilter } from '../../prisma/dto/string-nullable-filter.input';
import { JsonNullableFilter } from '../../prisma/dto/json-nullable-filter.input';
import { DateTimeFilter } from '../../prisma/dto/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { EmployeeListRelationFilter } from '../../employee/dto/employee-list-relation-filter.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class EmployeePermissionWhereInput {

    @Field(() => [EmployeePermissionWhereInput], {nullable:true})
    AND?: Array<EmployeePermissionWhereInput>;

    @Field(() => [EmployeePermissionWhereInput], {nullable:true})
    OR?: Array<EmployeePermissionWhereInput>;

    @Field(() => [EmployeePermissionWhereInput], {nullable:true})
    NOT?: Array<EmployeePermissionWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    permissionId?: BigIntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    action?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    subject?: StringFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    conditions?: JsonNullableFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;

    @Field(() => EmployeeListRelationFilter, {nullable:true})
    @Type(() => EmployeeListRelationFilter)
    @ValidateNested()
    @Type(() => EmployeeListRelationFilter)
    employees?: EmployeeListRelationFilter;
}
