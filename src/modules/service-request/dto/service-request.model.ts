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

@ObjectType()
export class ServiceRequest {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    serviceRequestId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    vehicleId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    userId!: bigint | null;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    guestId!: bigint | null;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    approvedServiceId!: bigint | null;

    /**
     * Note: Optional because field defaults to pending
     */
    @Field(() => ServiceRequestStatus, {nullable:true,defaultValue:'PENDING',description:'Note: Optional because field defaults to pending'})
    status!: keyof typeof ServiceRequestStatus | null;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Date, {nullable:true})
    createdAt!: Date | null;

    @Field(() => Date, {nullable:true})
    resolvedAt!: Date | null;

    @Field(() => String, {nullable:true})
    resolvedBy!: bigint | null;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => [Job], {nullable:true})
    @Type(() => Job)
    jobs?: Array<Job>;

    @Field(() => Service, {nullable:true})
    @Type(() => Service)
    approvedService?: Service | null;

    @Field(() => Vehicle, {nullable:false})
    @Type(() => Vehicle)
    vehicle?: Vehicle;

    @Field(() => Workshop, {nullable:false})
    @Type(() => Workshop)
    workshop?: Workshop;

    @Field(() => User, {nullable:true})
    user?: User | null;

    /**
     * Note: Cannot fill guest while creating service request, because sr with guest can only be created by guest creation.
     */
    @Field(() => Guest, {nullable:true,description:'Note: Cannot fill guest while creating service request, because sr with guest can only be created by guest creation.'})
    guest?: Guest | null;

    @Field(() => ServiceRequestCount, {nullable:false})
    _count?: ServiceRequestCount;
}
