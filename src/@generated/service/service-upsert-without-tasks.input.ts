import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceUpdateWithoutTasksInput } from './service-update-without-tasks.input';
import { Type } from 'class-transformer';
import { ServiceCreateWithoutTasksInput } from './service-create-without-tasks.input';
import { ServiceWhereInput } from './service-where.input';

@InputType()
export class ServiceUpsertWithoutTasksInput {

    @Field(() => ServiceUpdateWithoutTasksInput, {nullable:false})
    @Type(() => ServiceUpdateWithoutTasksInput)
    update!: ServiceUpdateWithoutTasksInput;

    @Field(() => ServiceCreateWithoutTasksInput, {nullable:false})
    @Type(() => ServiceCreateWithoutTasksInput)
    create!: ServiceCreateWithoutTasksInput;

    @Field(() => ServiceWhereInput, {nullable:true})
    @Type(() => ServiceWhereInput)
    where?: ServiceWhereInput;
}
