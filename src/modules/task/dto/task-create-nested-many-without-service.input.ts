import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutServiceInput } from './task-create-without-service.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { TaskCreateOrConnectWithoutServiceInput } from './task-create-or-connect-without-service.input';
import { HideField } from '@nestjs/graphql';
import { TaskCreateManyServiceInputEnvelope } from './task-create-many-service-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TaskWhereUniqueInput } from './task-where-unique.input';

@InputType()
export class TaskCreateNestedManyWithoutServiceInput {

    @Field(() => [TaskCreateWithoutServiceInput], {nullable:true})
    @Type(() => TaskCreateWithoutServiceInput)
    @ValidateNested()
    create?: Array<TaskCreateWithoutServiceInput>;

    @Field(() => TaskCreateManyServiceInputEnvelope, {nullable:true})
    @Type(() => TaskCreateManyServiceInputEnvelope)
    @ValidateNested()
    createMany?: TaskCreateManyServiceInputEnvelope;

    }