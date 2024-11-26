import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskUpdateManyMutationInput } from './task-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { TaskWhereInput } from './task-where.input';

@ArgsType()
export class UpdateManyTaskArgs {

    @Field(() => TaskUpdateManyMutationInput, {nullable:false})
    @Type(() => TaskUpdateManyMutationInput)
    @ValidateNested()
    data!: TaskUpdateManyMutationInput;

    @Field(() => TaskWhereInput, {nullable:true})
    @Type(() => TaskWhereInput)
    where?: TaskWhereInput;
}
