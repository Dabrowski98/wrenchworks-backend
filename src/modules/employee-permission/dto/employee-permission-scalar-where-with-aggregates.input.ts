import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../../prisma/dto/big-int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../../prisma/dto/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../../prisma/dto/string-nullable-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../../prisma/dto/json-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../../prisma/dto/date-time-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class EmployeePermissionScalarWhereWithAggregatesInput {

    @Field(() => [EmployeePermissionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<EmployeePermissionScalarWhereWithAggregatesInput>;

    @Field(() => [EmployeePermissionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<EmployeePermissionScalarWhereWithAggregatesInput>;

    @Field(() => [EmployeePermissionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<EmployeePermissionScalarWhereWithAggregatesInput>;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    permissionId?: BigIntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    action?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    subject?: StringWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    conditions?: JsonNullableWithAggregatesFilter;

    }