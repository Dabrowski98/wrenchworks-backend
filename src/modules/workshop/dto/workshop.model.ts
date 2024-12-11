import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { HideField } from '@nestjs/graphql';
import { Address } from '../../address/dto/address.model';
import { Type } from 'class-transformer';
import { Customer } from '../../customer/dto/customer.model';
import { Employee } from '../../employee/dto/employee.model';
import { Review } from '../../review/dto/review.model';
import { ServiceRequest } from '../../service-request/dto/service-request.model';
import { Service } from '../../service/dto/service.model';
import { User } from '../../user/dto/user.model';
import { WorkshopDetails } from '../../workshop-details/dto/workshop-details.model';
import { WorkshopJob } from '../../workshop-job/dto/workshop-job.model';
import { JobCategory } from '../../job-category/dto/job-category.model';
import { JoinWorkshopRequest } from '../../join-workshop-request/dto/join-workshop-request.model';
import { WorkshopDevice } from '../../workshop-device/dto/workshop-device.model';
import { WorkshopCount } from './workshop-count.output';

@ObjectType()
export class Workshop {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    ownerId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    addressId!: bigint | null;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    telephoneNumber!: string;

    /**
     * Note: Password will be hashed before storage
     */
    @Field(() => String, {nullable:true})
    refreshToken!: string | null;

    @Field(() => Boolean, {nullable:true,defaultValue:false})
    isVerified!: boolean | null;

    @Field(() => Boolean, {nullable:true,defaultValue:false})
    isManagingWork!: boolean | null;

    @Field(() => Boolean, {nullable:true,defaultValue:false})
    isOfferingService!: boolean | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => String, {nullable:true})
    updatedBy!: bigint | null;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => Address, {nullable:true})
    @Type(() => Address)
    address?: Address | null;

    @Field(() => [Customer], {nullable:true})
    @Type(() => Customer)
    customers?: Array<Customer>;

    @Field(() => [Employee], {nullable:true})
    @Type(() => Employee)
    employees?: Array<Employee>;

    @Field(() => [Review], {nullable:true})
    @Type(() => Review)
    reviews?: Array<Review>;

    @Field(() => [ServiceRequest], {nullable:true})
    @Type(() => ServiceRequest)
    serviceRequests?: Array<ServiceRequest>;

    @Field(() => [Service], {nullable:true})
    @Type(() => Service)
    services?: Array<Service>;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => WorkshopDetails, {nullable:true})
    @Type(() => WorkshopDetails)
    workshopDetails?: WorkshopDetails | null;

    @Field(() => [WorkshopJob], {nullable:true})
    @Type(() => WorkshopJob)
    workshopJobs?: Array<WorkshopJob>;

    @Field(() => [JobCategory], {nullable:true})
    @Type(() => JobCategory)
    jobCategories?: Array<JobCategory>;

    @Field(() => [JoinWorkshopRequest], {nullable:true})
    joinWorkshopRequests?: Array<JoinWorkshopRequest>;

    @Field(() => [WorkshopDevice], {nullable:true})
    workshopPCs?: Array<WorkshopDevice>;

    @Field(() => WorkshopCount, {nullable:false})
    _count?: WorkshopCount;
}