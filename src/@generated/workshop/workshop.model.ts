import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Address } from '../address/address.model';
import { Customer } from '../customer/customer.model';
import { Employee } from '../employee/employee.model';
import { PermissionSet } from '../permission-set/permission-set.model';
import { Review } from '../review/review.model';
import { ServiceRequest } from '../service-request/service-request.model';
import { Service } from '../service/service.model';
import { Person } from '../person/person.model';
import { WorkshopDetails } from '../workshop-details/workshop-details.model';
import { WorkshopJob } from '../workshop-job/workshop-job.model';
import { JobCategory } from '../job-category/job-category.model';
import { WorkshopCount } from './workshop-count.output';

@ObjectType()
export class Workshop {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    personId!: bigint;

    @Field(() => String, {nullable:true})
    email!: string | null;

    @Field(() => Boolean, {nullable:true,defaultValue:false})
    isVerified!: boolean | null;

    @Field(() => Boolean, {nullable:true,defaultValue:false})
    isManagingWork!: boolean | null;

    @Field(() => Date, {nullable:true})
    createdAt!: Date | null;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => [Address], {nullable:true})
    addresses?: Array<Address>;

    @Field(() => [Customer], {nullable:true})
    customers?: Array<Customer>;

    @Field(() => [Employee], {nullable:true})
    employees?: Array<Employee>;

    @Field(() => [PermissionSet], {nullable:true})
    permissionSets?: Array<PermissionSet>;

    @Field(() => [Review], {nullable:true})
    reviews?: Array<Review>;

    @Field(() => [ServiceRequest], {nullable:true})
    serviceRequests?: Array<ServiceRequest>;

    @Field(() => [Service], {nullable:true})
    services?: Array<Service>;

    @Field(() => Person, {nullable:false})
    person?: Person;

    @Field(() => WorkshopDetails, {nullable:true})
    workshopDetails?: WorkshopDetails | null;

    @Field(() => [WorkshopJob], {nullable:true})
    workshopJobs?: Array<WorkshopJob>;

    @Field(() => [JobCategory], {nullable:true})
    jobCategories?: Array<JobCategory>;

    @Field(() => WorkshopCount, {nullable:false})
    _count?: WorkshopCount;
}
