import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { ServiceStatus } from '../../prisma/dto/service-status.enum';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { ServiceRequest } from '../../service-request/dto/service-request.model';
import { Type } from 'class-transformer';
import { Task } from '../../task/dto/task.model';
import { Customer } from '../../customer/dto/customer.model';
import { Employee } from '../../employee/dto/employee.model';
import { Vehicle } from '../../vehicle/dto/vehicle.model';
import { Workshop } from '../../workshop/dto/workshop.model';
import { ServiceCount } from './service-count.output';

@ObjectType()
export class Service {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    serviceId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    serviceRequestId!: bigint | null;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    vehicleId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    customerId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    employeeId!: bigint;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => String, {nullable:true})
    serviceDescription!: string | null;

    @Field(() => ServiceStatus, {nullable:true,defaultValue:'PENDING'})
    status!: keyof typeof ServiceStatus | null;

    /**
     * Note: Optional because field defaults to false
     */
    @Field(() => Boolean, {nullable:false,defaultValue:false,description:'Note: Optional because field defaults to false'})
    payedOff!: boolean;

    /**
     * Note: Optional because field defaults to 0.00
     */
    @Field(() => GraphQLDecimal, {nullable:false,defaultValue:0,description:'Note: Optional because field defaults to 0.00'})
    paymentAmount!: Decimal;

    /**
     * Note: Optional because field defaults to now()
     */
    @Field(() => Date, {nullable:false,description:'Note: Optional because field defaults to now()'})
    serviceStartDate!: Date;

    @Field(() => Date, {nullable:true})
    serviceEndDate!: Date | null;

    @Field(() => Date, {nullable:false})
    addedAt!: Date;

    @Field(() => String, {nullable:true})
    addedBy!: bigint | null;

    @Field(() => Date, {nullable:true})
    resolvedAt!: Date | null;

    @Field(() => String, {nullable:true})
    resolvedBy!: bigint | null;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => String, {nullable:true})
    updatedBy!: bigint | null;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => ServiceRequest, {nullable:true})
    @Type(() => ServiceRequest)
    serviceRequest?: ServiceRequest | null;

    @Field(() => [Task], {nullable:true})
    @Type(() => Task)
    tasks?: Array<Task>;

    @Field(() => Customer, {nullable:false})
    @Type(() => Customer)
    customer?: Customer;

    @Field(() => Employee, {nullable:false})
    @Type(() => Employee)
    employee?: Employee;

    @Field(() => Vehicle, {nullable:false})
    @Type(() => Vehicle)
    vehicle?: Vehicle;

    @Field(() => Workshop, {nullable:false})
    @Type(() => Workshop)
    workshop?: Workshop;

    @Field(() => ServiceCount, {nullable:false})
    _count?: ServiceCount;
}
