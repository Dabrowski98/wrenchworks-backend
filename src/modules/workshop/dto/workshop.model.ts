import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Address } from '../../address/dto/address.model';
import { Customer } from '../../customer/dto/customer.model';
import { Employee } from '../../employee/dto/employee.model';
import { PermissionSet } from '../../permission-set/dto/permission-set.model';
import { Review } from '../../review/dto/review.model';
import { ServiceRequest } from '../../service-request/dto/service-request.model';
import { Service } from '../../service/dto/service.model';
import { Person } from '../../person/dto/person.model';
import { WorkshopDetails } from '../../workshop-details/dto/workshop-details.model';
import { WorkshopJob } from '../../workshop-job/dto/workshop-job.model';
import { JobCategory } from '../../job-category/dto/job-category.model';
import { WorkshopCount } from './workshop-count.output';

@ObjectType()
export class Workshop {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    personId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    addressId!: bigint | null;

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

    @Field(() => Address, {nullable:true})
    address?: Address | null;

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
