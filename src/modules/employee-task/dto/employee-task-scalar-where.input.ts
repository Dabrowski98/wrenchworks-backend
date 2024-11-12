import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { DateTimeFilter } from '../../prisma/dto/date-time-filter.input';

@InputType()
export class EmployeeTaskScalarWhereInput {

    @Field(() => [EmployeeTaskScalarWhereInput], {nullable:true})
    AND?: Array<EmployeeTaskScalarWhereInput>;

    @Field(() => [EmployeeTaskScalarWhereInput], {nullable:true})
    OR?: Array<EmployeeTaskScalarWhereInput>;

    @Field(() => [EmployeeTaskScalarWhereInput], {nullable:true})
    NOT?: Array<EmployeeTaskScalarWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    taskId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    employeeId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    workshopId?: BigIntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
