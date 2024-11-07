import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { ServicesStatus } from '../../../prisma/dto/generated/services-status.enum';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { ServiceRequest } from '../../../service-request/dto/generated/service-request.model';
import { Task } from '../../../task/dto/generated/task.model';
import { Customer } from '../../../customer/dto/generated/customer.model';
import { Employee } from '../../../employee/dto/generated/employee.model';
import { Vehicle } from '../../../vehicle/dto/generated/vehicle.model';
import { Workshop } from '../../../workshop/dto/generated/workshop.model';
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

    @Field(() => ServicesStatus, {nullable:true,defaultValue:'pending'})
    status!: keyof typeof ServicesStatus | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    payedOff!: boolean;

    @Field(() => GraphQLDecimal, {nullable:false,defaultValue:0})
    paymentAmount!: Decimal;

    @Field(() => Date, {nullable:false})
    serviceStartDate!: Date;

    @Field(() => Date, {nullable:true})
    serviceEndDate!: Date | null;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => ServiceRequest, {nullable:true})
    serviceRequest?: ServiceRequest | null;

    @Field(() => [Task], {nullable:true})
    tasks?: Array<Task>;

    @Field(() => Customer, {nullable:false})
    customer?: Customer;

    @Field(() => Employee, {nullable:false})
    employee?: Employee;

    @Field(() => Vehicle, {nullable:false})
    vehicle?: Vehicle;

    @Field(() => Workshop, {nullable:false})
    workshop?: Workshop;

    @Field(() => ServiceCount, {nullable:false})
    _count?: ServiceCount;
}
