import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskStatus } from './task-status.enum';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumTaskStatusNullableFilter } from './nested-enum-task-status-nullable-filter.input';

@InputType()
export class NestedEnumTaskStatusNullableWithAggregatesFilter {

    @Field(() => TaskStatus, {nullable:true})
    equals?: keyof typeof TaskStatus;

    @Field(() => [TaskStatus], {nullable:true})
    in?: Array<keyof typeof TaskStatus>;

    @Field(() => [TaskStatus], {nullable:true})
    notIn?: Array<keyof typeof TaskStatus>;

    @Field(() => NestedEnumTaskStatusNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumTaskStatusNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumTaskStatusNullableFilter, {nullable:true})
    _min?: NestedEnumTaskStatusNullableFilter;

    @Field(() => NestedEnumTaskStatusNullableFilter, {nullable:true})
    _max?: NestedEnumTaskStatusNullableFilter;
}
