import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { ServiceRequestStatus } from '../../prisma/dto/service-request-status.enum';
import { Job } from '../../job/dto/job.model';
import { Type } from 'class-transformer';
import { Service } from '../../service/dto/service.model';
import { Vehicle } from '../../vehicle/dto/vehicle.model';
import { Workshop } from '../../workshop/dto/workshop.model';
import { User } from '../../user/dto/user.model';
import { Guest } from '../../guest/dto/guest.model';
import { ServiceRequestCount } from './service-request-count.output';

/**
 * The ServiceRequest model handles customer requests for services, documenting the status and description of the request.
 * It links vehicles, workshops, users, and approved services in the system.
 */
@ObjectType({description:'The ServiceRequest model handles customer requests for services, documenting the status and description of the request.\nIt links vehicles, workshops, users, and approved services in the system.'})
export class ServiceRequest {

    /**
     * Identifier of the service request
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the service request'})
    serviceRequestId!: bigint;

    /**
     * Identifier of the workshop
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the workshop'})
    workshopId!: bigint;

    /**
     * Identifier of the vehicle
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the vehicle'})
    vehicleId!: bigint;

    /**
     * Identifier of the user
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:true,description:'Identifier of the user'})
    userId!: bigint | null;

    /**
     * Identifier of the guest
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:true,description:'Identifier of the guest'})
    guestId!: bigint | null;

    /**
     * Identifier of the approved service
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:true,description:'Identifier of the approved service'})
    approvedServiceId!: bigint | null;

    /**
     * Current status of the request
     * Note: Optional because field defaults to pending
     */
    @Field(() => ServiceRequestStatus, {nullable:true,defaultValue:'PENDING',description:'Current status of the request\nNote: Optional because field defaults to pending'})
    status!: keyof typeof ServiceRequestStatus | null;

    /**
     * Description of the service request
     */
    @Field(() => String, {nullable:true,description:'Description of the service request'})
    description!: string | null;

    /**
     * Timestamp of creation
     */
    @Field(() => Date, {nullable:false,description:'Timestamp of creation'})
    createdAt!: Date;

    /**
     * Timestamp when request was resolved
     */
    @Field(() => Date, {nullable:true,description:'Timestamp when request was resolved'})
    resolvedAt!: Date | null;

    /**
     * Identifier of user who resolved the request
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:true,description:'Identifier of user who resolved the request'})
    resolvedBy!: bigint | null;

    /**
     * Timestamp of deletion
     */
    @Field(() => Date, {nullable:true,description:'Timestamp of deletion'})
    deletedAt!: Date | null;

    /**
     * Jobs associated with this request
     */
    @Field(() => [Job], {nullable:true,description:'Jobs associated with this request'})
    @Type(() => Job)
    jobs?: Array<Job>;

    /**
     * Approved service for this request
     */
    @Field(() => Service, {nullable:true,description:'Approved service for this request'})
    @Type(() => Service)
    approvedService?: Service | null;

    /**
     * Vehicle associated with this request
     */
    @Field(() => Vehicle, {nullable:false,description:'Vehicle associated with this request'})
    @Type(() => Vehicle)
    vehicle?: Vehicle;

    /**
     * Workshop handling this request
     */
    @Field(() => Workshop, {nullable:false,description:'Workshop handling this request'})
    @Type(() => Workshop)
    workshop?: Workshop;

    /**
     * User who created the request
     */
    @Field(() => User, {nullable:true,description:'User who created the request'})
    user?: User | null;

    /**
     * Guest who created the request
     * Note: Cannot fill guest while creating service request, because sr with guest can only be created by guest creation.
     */
    @Field(() => Guest, {nullable:true,description:'Guest who created the request\nNote: Cannot fill guest while creating service request, because sr with guest can only be created by guest creation.'})
    guest?: Guest | null;

    @Field(() => ServiceRequestCount, {nullable:false})
    _count?: ServiceRequestCount;
}
