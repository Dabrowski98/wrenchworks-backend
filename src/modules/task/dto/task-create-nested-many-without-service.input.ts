import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutServiceInput } from './task-create-without-service.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { TaskCreateOrConnectWithoutServiceInput } from './task-create-or-connect-without-service.input';
import { TaskCreateManyServiceInputEnvelope } from './task-create-many-service-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TaskWhereUniqueInput } from './task-where-unique.input';

@InputType()
export class TaskCreateNestedManyWithoutServiceInput {

    @Field(() => [TaskCreateWithoutServiceInput], {nullable:true})
    @Type(() => TaskCreateWithoutServiceInput)
    @ValidateNested()
    create?: Array<TaskCreateWithoutServiceInput>;

    @Field(() => [TaskCreateOrConnectWithoutServiceInput], {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutServiceInput)
    @ValidateNested()
    connectOrCreate?: Array<TaskCreateOrConnectWithoutServiceInput>;

    @Field(() => TaskCreateManyServiceInputEnvelope, {nullable:true})
    @Type(() => TaskCreateManyServiceInputEnvelope)
    @ValidateNested()
    createMany?: TaskCreateManyServiceInputEnvelope;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<TaskWhereUniqueInput, 'taskId'>>;
}
