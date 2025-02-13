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

/**
 * The Service model records information about the services provided by a workshop including payment details and service status.
 * It connects various entities such as customers, employees, vehicles, and service requests.
 */
@ObjectType({description:'The Service model records information about the services provided by a workshop including payment details and service status.\nIt connects various entities such as customers, employees, vehicles, and service requests.'})
export class Service {

    /**
     * Identifier of the service
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the service'})
    serviceId!: bigint;

    /**
     * Identifier of the service request
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:true,description:'Identifier of the service request'})
    serviceRequestId!: bigint | null;

    /**
     * Identifier of the workshop providing the service
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the workshop providing the service'})
    workshopId!: bigint;

    /**
     * Identifier of the vehicle being serviced
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the vehicle being serviced'})
    vehicleId!: bigint;

    /**
     * Identifier of the customer receiving the service
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the customer receiving the service'})
    customerId!: bigint;

    /**
     * Identifier of the employee performing the service
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the employee performing the service'})
    employeeId!: bigint;

    /**
     * General description of the service
     */
    @Field(() => String, {nullable:true,description:'General description of the service'})
    description!: string | null;

    /**
     * Technical description of service performed
     */
    @Field(() => String, {nullable:true,description:'Technical description of service performed'})
    serviceDescription!: string | null;

    /**
     * Current status of the service
     */
    @Field(() => ServiceStatus, {nullable:true,defaultValue:'PENDING',description:'Current status of the service'})
    status!: keyof typeof ServiceStatus | null;

    /**
     * Payment status of the service
     * Note: Optional because field defaults to false
     */
    @Field(() => Boolean, {nullable:false,defaultValue:false,description:'Payment status of the service\nNote: Optional because field defaults to false'})
    payedOff!: boolean;

    /**
     * Total amount to be paid for the service
     * Note: Optional because field defaults to 0.00
     */
    @Field(() => GraphQLDecimal, {nullable:false,defaultValue:0,description:'Total amount to be paid for the service\nNote: Optional because field defaults to 0.00'})
    paymentAmount!: Decimal;

    /**
     * Date when service work began
     * Note: Optional because field defaults to now()
     */
    @Field(() => Date, {nullable:false,description:'Date when service work began\nNote: Optional because field defaults to now()'})
    serviceStartDate!: Date;

    /**
     * Date when service work was completed
     */
    @Field(() => Date, {nullable:true,description:'Date when service work was completed'})
    serviceEndDate!: Date | null;

    /**
     * Timestamp when record was added
     */
    @Field(() => Date, {nullable:false,description:'Timestamp when record was added'})
    addedAt!: Date;

    /**
     * Identifier of user who added the record
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:true,description:'Identifier of user who added the record'})
    addedBy!: bigint | null;

    /**
     * Timestamp when service was resolved
     */
    @Field(() => Date, {nullable:true,description:'Timestamp when service was resolved'})
    resolvedAt!: Date | null;

    /**
     * Identifier of user who resolved the service
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:true,description:'Identifier of user who resolved the service'})
    resolvedBy!: bigint | null;

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
     * Timestamp of deletion
     */
    @Field(() => Date, {nullable:true,description:'Timestamp of deletion'})
    deletedAt!: Date | null;

    /**
     * Associated service request
     */
    @Field(() => ServiceRequest, {nullable:true,description:'Associated service request'})
    @Type(() => ServiceRequest)
    serviceRequest?: ServiceRequest | null;

    /**
     * Tasks associated with this service
     */
    @Field(() => [Task], {nullable:true,description:'Tasks associated with this service'})
    @Type(() => Task)
    tasks?: Array<Task>;

    /**
     * Customer receiving the service
     */
    @Field(() => Customer, {nullable:false,description:'Customer receiving the service'})
    @Type(() => Customer)
    customer?: Customer;

    /**
     * Employee performing the service
     */
    @Field(() => Employee, {nullable:false,description:'Employee performing the service'})
    @Type(() => Employee)
    employee?: Employee;

    /**
     * Vehicle being serviced
     */
    @Field(() => Vehicle, {nullable:false,description:'Vehicle being serviced'})
    @Type(() => Vehicle)
    vehicle?: Vehicle;

    /**
     * Workshop providing the service
     */
    @Field(() => Workshop, {nullable:false,description:'Workshop providing the service'})
    @Type(() => Workshop)
    workshop?: Workshop;

    @Field(() => ServiceCount, {nullable:false})
    _count?: ServiceCount;
}
