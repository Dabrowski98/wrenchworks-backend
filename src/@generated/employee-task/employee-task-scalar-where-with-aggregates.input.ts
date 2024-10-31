import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../prisma/big-int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class EmployeeTaskScalarWhereWithAggregatesInput {

    @Field(() => [EmployeeTaskScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<EmployeeTaskScalarWhereWithAggregatesInput>;

    @Field(() => [EmployeeTaskScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<EmployeeTaskScalarWhereWithAggregatesInput>;

    @Field(() => [EmployeeTaskScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<EmployeeTaskScalarWhereWithAggregatesInput>;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    taskId?: BigIntWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    employeeId?: BigIntWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    workshopId?: BigIntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
