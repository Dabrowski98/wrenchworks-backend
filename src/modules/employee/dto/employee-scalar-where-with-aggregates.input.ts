import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../../prisma/dto/big-int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../../prisma/dto/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../../prisma/dto/date-time-nullable-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../../prisma/dto/int-nullable-with-aggregates-filter.input';

@InputType()
export class EmployeeScalarWhereWithAggregatesInput {

    @Field(() => [EmployeeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<EmployeeScalarWhereWithAggregatesInput>;

    @Field(() => [EmployeeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<EmployeeScalarWhereWithAggregatesInput>;

    @Field(() => [EmployeeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<EmployeeScalarWhereWithAggregatesInput>;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    employeeId?: BigIntWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    workshopId?: BigIntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    joinedAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    deletedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    permissionSetId?: IntNullableWithAggregatesFilter;
}
