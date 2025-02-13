import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { ServiceRequest } from '../../service-request/dto/service-request.model';
import { Type } from 'class-transformer';
import { Service } from '../../service/dto/service.model';
import { VehicleModel } from '../../vehicle-model/dto/vehicle-model.model';
import { User } from '../../user/dto/user.model';
import { Customer } from '../../customer/dto/customer.model';
import { Guest } from '../../guest/dto/guest.model';
import { VehicleDetails } from '../../vehicle-details/dto/vehicle-details.model';
import { VehicleCount } from './vehicle-count.output';

/**
 * The Vehicle model holds information about vehicles owned or managed within the system, including details like model and owner.
 * It tracks service requests and links to vehicle details for further information.
 */
@ObjectType({description:'The Vehicle model holds information about vehicles owned or managed within the system, including details like model and owner.\nIt tracks service requests and links to vehicle details for further information.'})
export class Vehicle {

    /**
     * Identifier of the vehicle
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the vehicle'})
    vehicleId!: bigint;

    /**
     * Identifier of the user who owns the vehicle
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:true,description:'Identifier of the user who owns the vehicle'})
    userId!: bigint | null;

    /**
     * Identifier of the guest who owns the vehicle
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:true,description:'Identifier of the guest who owns the vehicle'})
    guestId!: bigint | null;

    /**
     * Identifier of the customer who owns the vehicle
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:true,description:'Identifier of the customer who owns the vehicle'})
    customerId!: bigint | null;

    /**
     * Identifier of the vehicle model
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the vehicle model'})
    modelId!: bigint;

    /**
     * Timestamp when vehicle was deleted
     */
    @Field(() => Date, {nullable:true,description:'Timestamp when vehicle was deleted'})
    deletedAt!: Date | null;

    /**
     * Service requests associated with this vehicle
     */
    @Field(() => [ServiceRequest], {nullable:true,description:'Service requests associated with this vehicle'})
    @Type(() => ServiceRequest)
    serviceRequests?: Array<ServiceRequest>;

    /**
     * Services performed on this vehicle
     */
    @Field(() => [Service], {nullable:true,description:'Services performed on this vehicle'})
    @Type(() => Service)
    services?: Array<Service>;

    /**
     * Model information for this vehicle
     */
    @Field(() => VehicleModel, {nullable:false,description:'Model information for this vehicle'})
    @Type(() => VehicleModel)
    vehicleModel?: VehicleModel;

    /**
     * User who owns the vehicle
     */
    @Field(() => User, {nullable:true,description:'User who owns the vehicle'})
    user?: User | null;

    /**
     * Customer who owns the vehicle
     */
    @Field(() => Customer, {nullable:true,description:'Customer who owns the vehicle'})
    @Type(() => Customer)
    customer?: Customer | null;

    /**
     * Guest who owns the vehicle
     */
    @Field(() => Guest, {nullable:true,description:'Guest who owns the vehicle'})
    guest?: Guest | null;

    /**
     * Additional details about the vehicle
     */
    @Field(() => VehicleDetails, {nullable:true,description:'Additional details about the vehicle'})
    vehicleDetails?: VehicleDetails | null;

    @Field(() => VehicleCount, {nullable:false})
    _count?: VehicleCount;
}
