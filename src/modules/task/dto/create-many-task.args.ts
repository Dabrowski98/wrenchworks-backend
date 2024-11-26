import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskCreateManyInput } from './task-create-many.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateManyTaskArgs {

    @Field(() => [TaskCreateManyInput], {nullable:false})
    @Type(() => TaskCreateManyInput)
    @ValidateNested()
    data!: Array<TaskCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
