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

@ObjectType()
export class Vehicle {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    vehicleId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    userId!: bigint | null;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    guestId!: bigint | null;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    customerId!: bigint | null;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    modelId!: bigint;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => [ServiceRequest], {nullable:true})
    @Type(() => ServiceRequest)
    serviceRequests?: Array<ServiceRequest>;

    @Field(() => [Service], {nullable:true})
    @Type(() => Service)
    services?: Array<Service>;

    @Field(() => VehicleModel, {nullable:false})
    @Type(() => VehicleModel)
    vehicleModel?: VehicleModel;

    @Field(() => User, {nullable:true})
    user?: User | null;

    @Field(() => Customer, {nullable:true})
    @Type(() => Customer)
    customer?: Customer | null;

    @Field(() => Guest, {nullable:true})
    guest?: Guest | null;

    @Field(() => VehicleDetails, {nullable:true})
    vehicleDetails?: VehicleDetails | null;

    @Field(() => VehicleCount, {nullable:false})
    _count?: VehicleCount;
}
