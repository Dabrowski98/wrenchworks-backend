import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopJobUpdateWithoutTasksInput } from './workshop-job-update-without-tasks.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopJobCreateWithoutTasksInput } from './workshop-job-create-without-tasks.input';
import { WorkshopJobWhereInput } from './workshop-job-where.input';

@InputType()
export class WorkshopJobUpsertWithoutTasksInput {

    @Field(() => WorkshopJobUpdateWithoutTasksInput, {nullable:false})
    @Type(() => WorkshopJobUpdateWithoutTasksInput)
    @ValidateNested()
    update!: WorkshopJobUpdateWithoutTasksInput;

    @Field(() => WorkshopJobCreateWithoutTasksInput, {nullable:false})
    @Type(() => WorkshopJobCreateWithoutTasksInput)
    @ValidateNested()
    create!: WorkshopJobCreateWithoutTasksInput;

    @Field(() => WorkshopJobWhereInput, {nullable:true})
    @Type(() => WorkshopJobWhereInput)
    where?: WorkshopJobWhereInput;
}
