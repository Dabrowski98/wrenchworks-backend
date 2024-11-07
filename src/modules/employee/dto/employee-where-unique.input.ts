import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeEmployeeIdWorkshopIdCompoundUniqueInput } from './employee-employee-id-workshop-id-compound-unique.input';
import { EmployeeWhereInput } from './employee-where.input';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { BigIntNullableFilter } from '../prisma/big-int-nullable-filter.input';
import { PermissionSetNullableRelationFilter } from '../permission-set/permission-set-nullable-relation-filter.input';
import { WorkshopRelationFilter } from '../workshop/workshop-relation-filter.input';
import { Type } from 'class-transformer';
import { PersonRelationFilter } from '../person/person-relation-filter.input';
import { ServiceListRelationFilter } from '../service/service-list-relation-filter.input';
import { EmployeeTaskListRelationFilter } from '../employee-task/employee-task-list-relation-filter.input';

@InputType()
export class EmployeeWhereUniqueInput {

    @Field(() => EmployeeEmployeeIdWorkshopIdCompoundUniqueInput, {nullable:true})
    employeeId_workshopId?: EmployeeEmployeeIdWorkshopIdCompoundUniqueInput;

    @Field(() => [EmployeeWhereInput], {nullable:true})
    AND?: Array<EmployeeWhereInput>;

    @Field(() => [EmployeeWhereInput], {nullable:true})
    OR?: Array<EmployeeWhereInput>;

    @Field(() => [EmployeeWhereInput], {nullable:true})
    NOT?: Array<EmployeeWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    employeeId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    workshopId?: BigIntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    joinedAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: DateTimeNullableFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    permissionSetId?: BigIntNullableFilter;

    @Field(() => PermissionSetNullableRelationFilter, {nullable:true})
    permissionSet?: PermissionSetNullableRelationFilter;

    @Field(() => WorkshopRelationFilter, {nullable:true})
    @Type(() => WorkshopRelationFilter)
    workshop?: WorkshopRelationFilter;

    @Field(() => PersonRelationFilter, {nullable:true})
    @Type(() => PersonRelationFilter)
    person?: PersonRelationFilter;

    @Field(() => ServiceListRelationFilter, {nullable:true})
    @Type(() => ServiceListRelationFilter)
    services?: ServiceListRelationFilter;

    @Field(() => EmployeeTaskListRelationFilter, {nullable:true})
    @Type(() => EmployeeTaskListRelationFilter)
    employeeTasks?: EmployeeTaskListRelationFilter;
}
