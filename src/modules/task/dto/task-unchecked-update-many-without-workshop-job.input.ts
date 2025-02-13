import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { TaskStatus } from '../../prisma/dto/task-status.enum';
import { Float } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { HideField } from '@nestjs/graphql';

@InputType()
export class TaskUncheckedUpdateManyWithoutWorkshopJobInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    taskId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    serviceId?: bigint | number;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Custom name must be a string' })
    @Validator.Length(2, 50, { message: 'Custom name must be between 2 and 50 characters' })
    @Validator.IsOptional()
    customName?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Description must be a string' })
    @Validator.Length(0, 2500, { message: 'Description cannot exceed 2500 characters' })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'Description is required' })
    @Validator.IsOptional({ groups: [UPDATE]})
    description?: string;

    @Field(() => TaskStatus, {nullable:true})
    @Validator.IsEnum(TaskStatus, { message: 'Invalid task status' })
    @Validator.IsOptional()
    status?: keyof typeof TaskStatus;

    @Field(() => Float, {nullable:true})
    @Validator.IsNumber({}, { message: 'Execution time must be a number' })
    @Validator.Min(0, { message: 'Execution time cannot be negative' })
    @Validator.Max(9999.99, { message: 'Whoa Cowboy! Execution time cannot exceed 9999.99!' })
    @Validator.IsOptional()
    executionTime?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    @Validator.IsNumber({}, { message: 'Parts cost must be a number' })
    @Validator.Min(0, { message: 'Parts cost cannot be negative' })
    @Validator.Max(9999999.99, { message: 'Parts cost cannot exceed 9999999.99' })
    @Validator.IsOptional()
    partsCost?: Decimal;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    createdBy?: bigint | number;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    updatedBy?: bigint | number;

    @HideField()
    resolvedAt?: Date | string;

    @HideField()
    resolvedBy?: bigint | number;
}
