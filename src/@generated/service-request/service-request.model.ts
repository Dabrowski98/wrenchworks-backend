import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { ServiceRequestsStatus } from '../prisma/service-requests-status.enum';
import { Job } from '../job/job.model';
import { Service } from '../service/service.model';
import { Vehicle } from '../vehicle/vehicle.model';
import { Workshop } from '../workshop/workshop.model';
import { Person } from '../person/person.model';
import { ServiceRequestCount } from './service-request-count.output';

@ObjectType()
export class ServiceRequest {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    serviceRequestId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    vehicleId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    personId!: bigint;

    @Field(() => Date, {nullable:false})
    requestedAt!: Date;

    @Field(() => ServiceRequestsStatus, {nullable:true,defaultValue:'pending'})
    status!: keyof typeof ServiceRequestsStatus | null;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => String, {nullable:true})
    approvedServiceId!: bigint | null;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => [Job], {nullable:true})
    jobs?: Array<Job>;

    @Field(() => Service, {nullable:true})
    approvedService?: Service | null;

    @Field(() => Vehicle, {nullable:false})
    vehicle?: Vehicle;

    @Field(() => Workshop, {nullable:false})
    workshop?: Workshop;

    @Field(() => Person, {nullable:false})
    person?: Person;

    @Field(() => ServiceRequestCount, {nullable:false})
    _count?: ServiceRequestCount;
}
