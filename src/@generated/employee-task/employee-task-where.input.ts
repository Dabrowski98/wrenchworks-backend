import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EmployeeRelationFilter } from '../employee/employee-relation-filter.input';
import { Type } from 'class-transformer';
import { TaskRelationFilter } from '../task/task-relation-filter.input';

@InputType()
export class EmployeeTaskWhereInput {

    @Field(() => [EmployeeTaskWhereInput], {nullable:true})
    AND?: Array<EmployeeTaskWhereInput>;

    @Field(() => [EmployeeTaskWhereInput], {nullable:true})
    OR?: Array<EmployeeTaskWhereInput>;

    @Field(() => [EmployeeTaskWhereInput], {nullable:true})
    NOT?: Array<EmployeeTaskWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    taskId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    employeeId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    workshopId?: BigIntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => EmployeeRelationFilter, {nullable:true})
    @Type(() => EmployeeRelationFilter)
    employee?: EmployeeRelationFilter;

    @Field(() => TaskRelationFilter, {nullable:true})
    @Type(() => TaskRelationFilter)
    Task?: TaskRelationFilter;
}
