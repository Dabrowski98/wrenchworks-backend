import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceUpdateWithoutTasksInput } from './service-update-without-tasks.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ServiceCreateWithoutTasksInput } from './service-create-without-tasks.input';
import { ServiceWhereInput } from './service-where.input';

@InputType()
export class ServiceUpsertWithoutTasksInput {

    @Field(() => ServiceUpdateWithoutTasksInput, {nullable:false})
    @Type(() => ServiceUpdateWithoutTasksInput)
    @ValidateNested()
    update!: ServiceUpdateWithoutTasksInput;

    @Field(() => ServiceCreateWithoutTasksInput, {nullable:false})
    @Type(() => ServiceCreateWithoutTasksInput)
    @ValidateNested()
    create!: ServiceCreateWithoutTasksInput;

    @Field(() => ServiceWhereInput, {nullable:true})
    @Type(() => ServiceWhereInput)
    where?: ServiceWhereInput;
}
