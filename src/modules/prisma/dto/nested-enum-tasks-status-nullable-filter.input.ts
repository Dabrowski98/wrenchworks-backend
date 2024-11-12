import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TasksStatus } from './tasks-status.enum';

@InputType()
export class NestedEnumTasksStatusNullableFilter {

    @Field(() => TasksStatus, {nullable:true})
    equals?: keyof typeof TasksStatus;

    @Field(() => [TasksStatus], {nullable:true})
    in?: Array<keyof typeof TasksStatus>;

    @Field(() => [TasksStatus], {nullable:true})
    notIn?: Array<keyof typeof TasksStatus>;

    @Field(() => NestedEnumTasksStatusNullableFilter, {nullable:true})
    not?: NestedEnumTasksStatusNullableFilter;
}
