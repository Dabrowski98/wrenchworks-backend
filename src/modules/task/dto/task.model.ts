import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { TaskStatus } from '../../prisma/dto/task-status.enum';
import { Float } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { WorkshopJob } from '../../workshop-job/dto/workshop-job.model';
import { Type } from 'class-transformer';
import { Service } from '../../service/dto/service.model';
import { Employee } from '../../employee/dto/employee.model';
import { TaskCount } from './task-count.output';

/**
 * The Task model defines individual tasks related to a service order including descriptions, execution time, and costs.
 * It also tracks task statuses and associations with employees and workshop jobs.
 */
@ObjectType({description:'The Task model defines individual tasks related to a service order including descriptions, execution time, and costs.\nIt also tracks task statuses and associations with employees and workshop jobs.'})
export class Task {

    /**
     * Identifier of the task
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the task'})
    taskId!: bigint;

    /**
     * Identifier of the service
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the service'})
    serviceId!: bigint;

    /**
     * Identifier of the workshop job
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the workshop job'})
    workshopJobId!: bigint;

    /**
     * Custom name for the task
     */
    @Field(() => String, {nullable:true,description:'Custom name for the task'})
    customName!: string | null;

    /**
     * Description of the task
     */
    @Field(() => String, {nullable:false,description:'Description of the task'})
    description!: string;

    /**
     * Current status of the task
     * Note: Optional because field defaults to pending
     */
    @Field(() => TaskStatus, {nullable:true,defaultValue:'PENDING',description:'Current status of the task\nNote: Optional because field defaults to pending'})
    status!: keyof typeof TaskStatus | null;

    /**
     * Time taken to execute the task
     * Note: Optional because field defaults to 0.00
     */
    @Field(() => Float, {nullable:false,defaultValue:0,description:'Time taken to execute the task\nNote: Optional because field defaults to 0.00'})
    executionTime!: number;

    /**
     * Cost of parts used in the task
     * Note: Optional because field defaults to 0.00
     */
    @Field(() => GraphQLDecimal, {nullable:false,defaultValue:0,description:'Cost of parts used in the task\nNote: Optional because field defaults to 0.00'})
    partsCost!: Decimal;

    /**
     * Timestamp of creation
     */
    @Field(() => Date, {nullable:false,description:'Timestamp of creation'})
    createdAt!: Date;

    /**
     * Identifier of user who created the record
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:true,description:'Identifier of user who created the record'})
    createdBy!: bigint | null;

    /**
     * Timestamp of last update
     */
    @Field(() => Date, {nullable:true,description:'Timestamp of last update'})
    updatedAt!: Date | null;

    /**
     * Identifier of user who last updated the record
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:true,description:'Identifier of user who last updated the record'})
    updatedBy!: bigint | null;

    /**
     * Timestamp when task was resolved
     */
    @Field(() => Date, {nullable:true,description:'Timestamp when task was resolved'})
    resolvedAt!: Date | null;

    /**
     * Identifier of user who resolved the task
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:true,description:'Identifier of user who resolved the task'})
    resolvedBy!: bigint | null;

    /**
     * Workshop job associated with this task
     */
    @Field(() => WorkshopJob, {nullable:false,description:'Workshop job associated with this task'})
    @Type(() => WorkshopJob)
    workshopJob?: WorkshopJob;

    /**
     * Service this task belongs to
     */
    @Field(() => Service, {nullable:false,description:'Service this task belongs to'})
    @Type(() => Service)
    service?: Service;

    /**
     * Employees assigned to this task
     */
    @Field(() => [Employee], {nullable:true,description:'Employees assigned to this task'})
    @Type(() => Employee)
    employees?: Array<Employee>;

    @Field(() => TaskCount, {nullable:false})
    _count?: TaskCount;
}
