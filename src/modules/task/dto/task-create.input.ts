import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { TasksStatus } from '../../prisma/dto/tasks-status.enum';
import { Float } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { WorkshopJobCreateNestedOneWithoutTasksInput } from '../../workshop-job/dto/workshop-job-create-nested-one-without-tasks.input';
import { ServiceCreateNestedOneWithoutTasksInput } from '../../service/dto/service-create-nested-one-without-tasks.input';
import { EmployeeTaskCreateNestedManyWithoutTaskInput } from '../../employee-task/dto/employee-task-create-nested-many-without-task.input';
import { CREATE, UPDATE } from 'src/constants/validation-groups';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { EmployeeEmployeeIdWorkshopIdCompoundUniqueInput } from 'src/modules/employee';

@InputType()
export class TaskCreateInput {

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Custom name must be a string' })
    @Validator.Length(2, 50, { message: 'Custom name must be between 2 and 50 characters' })
    @Validator.IsOptional()
    customName?: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'Description must be a string' })
    @Validator.IsNotEmpty({groups: [CREATE], message: 'Description is required' })
    @Validator.IsOptional({groups: [UPDATE]})
    @Validator.Length(0, 2500, { message: 'Description cannot exceed 2500 characters' })
    description!: string;

    @Field(() => TasksStatus, {nullable:true})
    @Validator.IsEnum(TasksStatus, { message: 'Invalid task status' })
    status?: keyof typeof TasksStatus;

    @Field(() => Float, {nullable:false})
    @Validator.IsNumber({}, { message: 'Execution time must be a number' })
    @Validator.Min(0, { message: 'Execution time cannot be negative' })
    @Validator.Max(9999.99, { message: 'Whoa Cowboy! Execution time cannot exceed 9999.99!' })
    executionTime!: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    @Validator.IsNumber({}, { message: 'Parts cost must be a number' })
    @Validator.Min(0, { message: 'Parts cost cannot be negative' })
    @Validator.Max(9999999.99, { message: 'Parts cost cannot exceed 9999999.99' })
    partsCost?: Decimal;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    @Validator.IsNotEmpty({ message: 'Workshop Job ID is required' })
    workshopJobId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    @Validator.IsNotEmpty({ message: 'Service ID is required' })
    serviceId!: bigint | number;

    @Field(() => [EmployeeEmployeeIdWorkshopIdCompoundUniqueInput], { nullable: true })
    @Type(() => EmployeeEmployeeIdWorkshopIdCompoundUniqueInput)
    @Validator.IsOptional()
    @Validator.IsArray({ message: 'Employee assignments must be an array' })
    @Validator.ArrayNotEmpty({ message: 'Employee assignments cannot be empty' })
    @Validator.ValidateNested({ each: true })
    employeeId_WorkshopIds?: EmployeeEmployeeIdWorkshopIdCompoundUniqueInput[];
    
}
