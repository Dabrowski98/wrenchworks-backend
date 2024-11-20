import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { TasksStatus } from '../../prisma/dto/tasks-status.enum';
import { Float } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { EmployeeTaskUncheckedUpdateManyWithoutTaskNestedInput } from '../../employee-task/dto/employee-task-unchecked-update-many-without-task-nested.input';


@InputType()
export class TaskUncheckedUpdateWithoutServiceInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    taskId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopJobId?: bigint | number;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Custom name must be a string' })
    @Validator.Length(2, 50, { message: 'Custom name must be between 2 and 50 characters' })
    @Validator.IsOptional()
    customName?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Description must be a string' })
    @Validator.IsNotEmpty({ message: 'Description is required' })
    @Validator.Length(0, 2500, { message: 'Description cannot exceed 2500 characters' })
    description?: string;

    @Field(() => TasksStatus, {nullable:true})
    @Validator.IsEnum(TasksStatus, { message: 'Invalid task status' })
    status?: keyof typeof TasksStatus;

    @Field(() => Float, {nullable:true})
    @Validator.IsNumber({}, { message: 'Execution time must be a number' })
    @Validator.Min(0, { message: 'Execution time cannot be negative' })
    @Validator.Max(9999.99, { message: 'Whoa Cowboy! Execution time cannot exceed 9999.99!' })
    executionTime?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    @Validator.IsNumber({}, { message: 'Parts cost must be a number' })
    @Validator.Min(0, { message: 'Parts cost cannot be negative' })
    @Validator.Max(9999999.99, { message: 'Parts cost cannot exceed 9999999.99' })
    partsCost?: Decimal;

    @Field(() => EmployeeTaskUncheckedUpdateManyWithoutTaskNestedInput, {nullable:true})
    @Type(() => EmployeeTaskUncheckedUpdateManyWithoutTaskNestedInput)
    taskEmployees?: EmployeeTaskUncheckedUpdateManyWithoutTaskNestedInput;
}
