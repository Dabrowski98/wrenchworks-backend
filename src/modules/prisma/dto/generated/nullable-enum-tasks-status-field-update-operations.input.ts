import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TasksStatus } from './tasks-status.enum';

@InputType()
export class NullableEnumTasksStatusFieldUpdateOperationsInput {

    @Field(() => TasksStatus, {nullable:true})
    set?: keyof typeof TasksStatus;
}
