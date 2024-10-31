import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { TasksStatus } from '../prisma/tasks-status.enum';
import { Float } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { EmployeeTaskUncheckedCreateNestedManyWithoutTaskInput } from '../employee-task/employee-task-unchecked-create-nested-many-without-task.input';

@InputType()
export class TaskUncheckedCreateWithoutServiceInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    taskId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    jobId?: bigint | number;

    @Field(() => String, {nullable:true})
    customName?: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => TasksStatus, {nullable:true})
    status?: keyof typeof TasksStatus;

    @Field(() => Float, {nullable:false})
    executionTime!: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    partsCost?: Decimal;

    @Field(() => EmployeeTaskUncheckedCreateNestedManyWithoutTaskInput, {nullable:true})
    @Type(() => EmployeeTaskUncheckedCreateNestedManyWithoutTaskInput)
    taskEmployees?: EmployeeTaskUncheckedCreateNestedManyWithoutTaskInput;
}
