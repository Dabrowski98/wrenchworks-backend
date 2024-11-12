import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { ServiceRequest } from '../../service-request/dto/service-request.model';
import { Service } from '../../service/dto/service.model';
import { VehicleModel } from '../../vehicle-model/dto/vehicle-model.model';
import { Person } from '../../person/dto/person.model';
import { VehicleDetails } from '../../vehicle-details/dto/vehicle-details.model';
import { VehicleCount } from './vehicle-count.output';

@ObjectType()
export class Vehicle {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    vehicleId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    personId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    modelId!: bigint;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => [ServiceRequest], {nullable:true})
    vehicleAssociatedServiceRequests?: Array<ServiceRequest>;

    @Field(() => [Service], {nullable:true})
    services?: Array<Service>;

    @Field(() => VehicleModel, {nullable:false})
    vehicleModel?: VehicleModel;

    @Field(() => Person, {nullable:false})
    person?: Person;

    @Field(() => VehicleDetails, {nullable:true})
    vehiclesDetails?: VehicleDetails | null;

    @Field(() => VehicleCount, {nullable:false})
    _count?: VehicleCount;
}
