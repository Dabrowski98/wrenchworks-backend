import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { AddressWorkshop } from '../address-workshop/address-workshop.model';
import { Customer } from '../customer/customer.model';
import { Employee } from '../employee/employee.model';
import { PermissionSet } from '../permission-set/permission-set.model';
import { Review } from '../review/review.model';
import { ServiceRequest } from '../service-request/service-request.model';
import { Service } from '../service/service.model';
import { Person } from '../person/person.model';
import { WorkshopDetails } from '../workshop-details/workshop-details.model';
import { WorkshopJob } from '../workshop-job/workshop-job.model';
import { WorkshopJobCategory } from '../workshop-job-category/workshop-job-category.model';
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

    @Field(() => [AddressWorkshop], {nullable:true})
    workshopAddresses?: Array<AddressWorkshop>;

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

    @Field(() => [WorkshopJobCategory], {nullable:true})
    workshopJobCategories?: Array<WorkshopJobCategory>;

    @Field(() => WorkshopCount, {nullable:false})
    _count?: WorkshopCount;
}
