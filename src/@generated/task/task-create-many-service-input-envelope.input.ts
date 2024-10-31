import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateManyServiceInput } from './task-create-many-service.input';
import { Type } from 'class-transformer';

@InputType()
export class TaskCreateManyServiceInputEnvelope {

    @Field(() => [TaskCreateManyServiceInput], {nullable:false})
    @Type(() => TaskCreateManyServiceInput)
    data!: Array<TaskCreateManyServiceInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
