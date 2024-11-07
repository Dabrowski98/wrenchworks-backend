import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TasksStatus } from './tasks-status.enum';
import { NestedEnumTasksStatusNullableFilter } from './nested-enum-tasks-status-nullable-filter.input';

@InputType()
export class EnumTasksStatusNullableFilter {

    @Field(() => TasksStatus, {nullable:true})
    equals?: keyof typeof TasksStatus;

    @Field(() => [TasksStatus], {nullable:true})
    in?: Array<keyof typeof TasksStatus>;

    @Field(() => [TasksStatus], {nullable:true})
    notIn?: Array<keyof typeof TasksStatus>;

    @Field(() => NestedEnumTasksStatusNullableFilter, {nullable:true})
    not?: NestedEnumTasksStatusNullableFilter;
}
