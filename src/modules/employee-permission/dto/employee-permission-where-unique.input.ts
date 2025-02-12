import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { EmployeePermissionWhereInput } from './employee-permission-where.input';
import { StringNullableFilter } from '../../prisma/dto/string-nullable-filter.input';
import { StringFilter } from '../../prisma/dto/string-filter.input';
import { JsonNullableFilter } from '../../prisma/dto/json-nullable-filter.input';
import { DateTimeFilter } from '../../prisma/dto/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { EmployeeListRelationFilter } from '../../employee/dto/employee-list-relation-filter.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { CREATE, UPDATE } from 'src/common/constants/validation-groups';


@InputType()
export class EmployeePermissionWhereUniqueInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    permissionId?: bigint | number;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Name must be a string' })
    @Validator.Length(2, 30, { message: 'Name must be between 2 and 30 characters' })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'Name is required' })
    @Validator.IsOptional({ groups: [UPDATE]})
    name?: string;

    @Field(() => [EmployeePermissionWhereInput], {nullable:true})
    AND?: Array<EmployeePermissionWhereInput>;

    @Field(() => [EmployeePermissionWhereInput], {nullable:true})
    OR?: Array<EmployeePermissionWhereInput>;

    @Field(() => [EmployeePermissionWhereInput], {nullable:true})
    NOT?: Array<EmployeePermissionWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    action?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    subject?: StringFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    conditions?: JsonNullableFilter;

    @Field(() => EmployeeListRelationFilter, {nullable:true})
    @Type(() => EmployeeListRelationFilter)
    @ValidateNested()
    @Type(() => EmployeeListRelationFilter)
    employees?: EmployeeListRelationFilter;
}