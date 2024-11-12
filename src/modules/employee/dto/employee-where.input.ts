import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { DateTimeFilter } from '../../prisma/dto/date-time-filter.input';
import { DateTimeNullableFilter } from '../../prisma/dto/date-time-nullable-filter.input';
import { IntNullableFilter } from '../../prisma/dto/int-nullable-filter.input';
import { PermissionSetNullableRelationFilter } from '../../permission-set/dto/permission-set-nullable-relation-filter.input';
import { WorkshopRelationFilter } from '../../workshop/dto/workshop-relation-filter.input';
import { Type } from 'class-transformer';
import { PersonRelationFilter } from '../../person/dto/person-relation-filter.input';
import { ServiceListRelationFilter } from '../../service/dto/service-list-relation-filter.input';
import { EmployeeTaskListRelationFilter } from '../../employee-task/dto/employee-task-list-relation-filter.input';

@InputType()
export class EmployeeWhereInput {

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

    @Field(() => IntNullableFilter, {nullable:true})
    permissionSetId?: IntNullableFilter;

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
