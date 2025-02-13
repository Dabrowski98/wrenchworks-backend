import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { StringFilter } from '../../prisma/dto/string-filter.input';
import { StringNullableFilter } from '../../prisma/dto/string-nullable-filter.input';
import { JsonNullableFilter } from '../../prisma/dto/json-nullable-filter.input';
import { DateTimeFilter } from '../../prisma/dto/date-time-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class EmployeePermissionScalarWhereInput {

    @Field(() => [EmployeePermissionScalarWhereInput], {nullable:true})
    AND?: Array<EmployeePermissionScalarWhereInput>;

    @Field(() => [EmployeePermissionScalarWhereInput], {nullable:true})
    OR?: Array<EmployeePermissionScalarWhereInput>;

    @Field(() => [EmployeePermissionScalarWhereInput], {nullable:true})
    NOT?: Array<EmployeePermissionScalarWhereInput>;

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
}
