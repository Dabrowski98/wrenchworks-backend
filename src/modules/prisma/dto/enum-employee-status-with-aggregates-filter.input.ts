import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeStatus } from './employee-status.enum';
import { NestedEnumEmployeeStatusWithAggregatesFilter } from './nested-enum-employee-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumEmployeeStatusFilter } from './nested-enum-employee-status-filter.input';

@InputType()
export class EnumEmployeeStatusWithAggregatesFilter {

    @Field(() => EmployeeStatus, {nullable:true})
    equals?: keyof typeof EmployeeStatus;

    @Field(() => [EmployeeStatus], {nullable:true})
    in?: Array<keyof typeof EmployeeStatus>;

    @Field(() => [EmployeeStatus], {nullable:true})
    notIn?: Array<keyof typeof EmployeeStatus>;

    @Field(() => NestedEnumEmployeeStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumEmployeeStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumEmployeeStatusFilter, {nullable:true})
    _min?: NestedEnumEmployeeStatusFilter;

    @Field(() => NestedEnumEmployeeStatusFilter, {nullable:true})
    _max?: NestedEnumEmployeeStatusFilter;
}
