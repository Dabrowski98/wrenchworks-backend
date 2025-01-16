import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskStatus } from './task-status.enum';
import { NestedEnumTaskStatusNullableFilter } from './nested-enum-task-status-nullable-filter.input';

@InputType()
export class EnumTaskStatusNullableFilter {

    @Field(() => TaskStatus, {nullable:true})
    equals?: keyof typeof TaskStatus;

    @Field(() => [TaskStatus], {nullable:true})
    in?: Array<keyof typeof TaskStatus>;

    @Field(() => [TaskStatus], {nullable:true})
    notIn?: Array<keyof typeof TaskStatus>;

    @Field(() => NestedEnumTaskStatusNullableFilter, {nullable:true})
    not?: NestedEnumTaskStatusNullableFilter;
}
