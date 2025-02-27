import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { EmployeeLoginWorkshopIdCompoundUniqueInput } from './employee-login-workshop-id-compound-unique.input';
import { EmployeeWhereInput } from './employee-where.input';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { BigIntNullableFilter } from '../../prisma/dto/big-int-nullable-filter.input';
import { StringNullableFilter } from '../../prisma/dto/string-nullable-filter.input';
import { StringFilter } from '../../prisma/dto/string-filter.input';
import { EnumEmployeeStatusFilter } from '../../prisma/dto/enum-employee-status-filter.input';
import { DateTimeFilter } from '../../prisma/dto/date-time-filter.input';
import { DateTimeNullableFilter } from '../../prisma/dto/date-time-nullable-filter.input';
import { HideField } from '@nestjs/graphql';
import { EmployeePermissionListRelationFilter } from '../../employee-permission/dto/employee-permission-list-relation-filter.input';
import { ServiceListRelationFilter } from '../../service/dto/service-list-relation-filter.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { JoinWorkshopRequestListRelationFilter } from '../../join-workshop-request/dto/join-workshop-request-list-relation-filter.input';
import { TaskListRelationFilter } from '../../task/dto/task-list-relation-filter.input';
import { UserNullableRelationFilter } from '../../user/dto/user-nullable-relation-filter.input';
import { WorkshopRelationFilter } from '../../workshop/dto/workshop-relation-filter.input';

@InputType()
export class EmployeeWhereUniqueInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    employeeId?: bigint | number;

    @Field(() => EmployeeLoginWorkshopIdCompoundUniqueInput, {nullable:true})
    login_workshopId?: EmployeeLoginWorkshopIdCompoundUniqueInput;

    @Field(() => [EmployeeWhereInput], {nullable:true})
    AND?: Array<EmployeeWhereInput>;

    @Field(() => [EmployeeWhereInput], {nullable:true})
    OR?: Array<EmployeeWhereInput>;

    @Field(() => [EmployeeWhereInput], {nullable:true})
    NOT?: Array<EmployeeWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    workshopId?: BigIntFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    userId?: BigIntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    nickname?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    login?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    refreshToken?: StringNullableFilter;

    @Field(() => EnumEmployeeStatusFilter, {nullable:true})
    status?: EnumEmployeeStatusFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    joinedAt?: DateTimeFilter;

    @Field(() => EmployeePermissionListRelationFilter, {nullable:true})
    permissions?: EmployeePermissionListRelationFilter;

    @Field(() => ServiceListRelationFilter, {nullable:true})
    @Type(() => ServiceListRelationFilter)
    @ValidateNested()
    @Type(() => ServiceListRelationFilter)
    services?: ServiceListRelationFilter;

    @Field(() => JoinWorkshopRequestListRelationFilter, {nullable:true})
    @ValidateNested()
    joinWorkshopRequests?: JoinWorkshopRequestListRelationFilter;

    @Field(() => TaskListRelationFilter, {nullable:true})
    @Type(() => TaskListRelationFilter)
    @ValidateNested()
    @Type(() => TaskListRelationFilter)
    tasks?: TaskListRelationFilter;

    @Field(() => UserNullableRelationFilter, {nullable:true})
    @Type(() => UserNullableRelationFilter)
    @ValidateNested()
    user?: UserNullableRelationFilter;

    @Field(() => WorkshopRelationFilter, {nullable:true})
    @Type(() => WorkshopRelationFilter)
    @ValidateNested()
    @Type(() => WorkshopRelationFilter)
    workshop?: WorkshopRelationFilter;
}