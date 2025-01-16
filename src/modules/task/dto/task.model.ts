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

@ObjectType()
export class Task {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    taskId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    serviceId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopJobId!: bigint;

    @Field(() => String, {nullable:true})
    customName!: string | null;

    @Field(() => String, {nullable:false})
    description!: string;

    /**
     * Note: Optional because field defaults to pending
     */
    @Field(() => TaskStatus, {nullable:true,defaultValue:'PENDING',description:'Note: Optional because field defaults to pending'})
    status!: keyof typeof TaskStatus | null;

    /**
     * Note: Optional because field defaults to 0.00
     */
    @Field(() => Float, {nullable:false,defaultValue:0,description:'Note: Optional because field defaults to 0.00'})
    executionTime!: number;

    /**
     * Note: Optional because field defaults to 0.00
     */
    @Field(() => GraphQLDecimal, {nullable:false,defaultValue:0,description:'Note: Optional because field defaults to 0.00'})
    partsCost!: Decimal;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => String, {nullable:true})
    createdBy!: bigint | null;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => String, {nullable:true})
    updatedBy!: bigint | null;

    @Field(() => Date, {nullable:true})
    resolvedAt!: Date | null;

    @Field(() => String, {nullable:true})
    resolvedBy!: bigint | null;

    @Field(() => WorkshopJob, {nullable:false})
    @Type(() => WorkshopJob)
    workshopJob?: WorkshopJob;

    @Field(() => Service, {nullable:false})
    @Type(() => Service)
    service?: Service;

    @Field(() => [Employee], {nullable:true})
    @Type(() => Employee)
    employees?: Array<Employee>;

    @Field(() => TaskCount, {nullable:false})
    _count?: TaskCount;
}
