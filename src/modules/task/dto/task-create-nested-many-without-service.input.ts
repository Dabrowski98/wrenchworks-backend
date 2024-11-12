import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutServiceInput } from './task-create-without-service.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutServiceInput } from './task-create-or-connect-without-service.input';
import { TaskCreateManyServiceInputEnvelope } from './task-create-many-service-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TaskWhereUniqueInput } from './task-where-unique.input';

@InputType()
export class TaskCreateNestedManyWithoutServiceInput {

    @Field(() => [TaskCreateWithoutServiceInput], {nullable:true})
    @Type(() => TaskCreateWithoutServiceInput)
    create?: Array<TaskCreateWithoutServiceInput>;

    @Field(() => [TaskCreateOrConnectWithoutServiceInput], {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutServiceInput)
    connectOrCreate?: Array<TaskCreateOrConnectWithoutServiceInput>;

    @Field(() => TaskCreateManyServiceInputEnvelope, {nullable:true})
    @Type(() => TaskCreateManyServiceInputEnvelope)
    createMany?: TaskCreateManyServiceInputEnvelope;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TaskWhereUniqueInput, 'taskId'>>;
}
