import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopJobCreateWithoutTasksInput } from './workshop-job-create-without-tasks.input';
import { Type } from 'class-transformer';
import { WorkshopJobCreateOrConnectWithoutTasksInput } from './workshop-job-create-or-connect-without-tasks.input';
import { Prisma } from '@prisma/client';
import { WorkshopJobWhereUniqueInput } from './workshop-job-where-unique.input';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';

@InputType()
export class WorkshopJobCreateNestedOneWithoutTasksInput {

    @Field(() => WorkshopJobCreateWithoutTasksInput, {nullable:true})
    @Type(() => WorkshopJobCreateWithoutTasksInput)
    create?: WorkshopJobCreateWithoutTasksInput;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    @Validator.IsNotEmpty({ message: 'Workshop Job ID is required' })
    workshopJobId!: bigint | number;
}
