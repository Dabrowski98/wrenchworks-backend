import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TasksStatus } from './tasks-status.enum';
import { NestedEnumTasksStatusNullableWithAggregatesFilter } from './nested-enum-tasks-status-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumTasksStatusNullableFilter } from './nested-enum-tasks-status-nullable-filter.input';

@InputType()
export class EnumTasksStatusNullableWithAggregatesFilter {

    @Field(() => TasksStatus, {nullable:true})
    equals?: keyof typeof TasksStatus;

    @Field(() => [TasksStatus], {nullable:true})
    in?: Array<keyof typeof TasksStatus>;

    @Field(() => [TasksStatus], {nullable:true})
    notIn?: Array<keyof typeof TasksStatus>;

    @Field(() => NestedEnumTasksStatusNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumTasksStatusNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumTasksStatusNullableFilter, {nullable:true})
    _min?: NestedEnumTasksStatusNullableFilter;

    @Field(() => NestedEnumTasksStatusNullableFilter, {nullable:true})
    _max?: NestedEnumTasksStatusNullableFilter;
}
