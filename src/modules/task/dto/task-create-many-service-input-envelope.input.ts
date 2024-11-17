import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateManyServiceInput } from './task-create-many-service.input';
import { Type } from 'class-transformer';
import * as Validator from 'class-validator';

@InputType()
export class TaskCreateManyServiceInputEnvelope {

    @Field(() => [TaskCreateManyServiceInput], {nullable:false})
    @Type(() => TaskCreateManyServiceInput)
    @Validator.ValidateNested({ each: true })
    data!: Array<TaskCreateManyServiceInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
