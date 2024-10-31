import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceWhereInput } from './service-where.input';
import { Type } from 'class-transformer';
import { ServiceUpdateWithoutTasksInput } from './service-update-without-tasks.input';

@InputType()
export class ServiceUpdateToOneWithWhereWithoutTasksInput {

    @Field(() => ServiceWhereInput, {nullable:true})
    @Type(() => ServiceWhereInput)
    where?: ServiceWhereInput;

    @Field(() => ServiceUpdateWithoutTasksInput, {nullable:false})
    @Type(() => ServiceUpdateWithoutTasksInput)
    data!: ServiceUpdateWithoutTasksInput;
}
