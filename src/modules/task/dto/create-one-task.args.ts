import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskCreateInput } from './task-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneTaskArgs {

    @Field(() => TaskCreateInput, {nullable:false})
    @Type(() => TaskCreateInput)
    @ValidateNested()
    data!: TaskCreateInput;
}
