import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
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
import { WorkshopDeviceOtp } from '../../workshop-device-otp/dto/workshop-device-otp.model';
import { WorkshopDevice } from '../../workshop-device/dto/workshop-device.model';
import { WorkshopCount } from './workshop-count.output';

/**
 * The Workshop model represents workshop entities that manage services, employees, and customers.
 * It stores essential information like contact details, verification status, and related address.
 */
@ObjectType({description:'The Workshop model represents workshop entities that manage services, employees, and customers.\nIt stores essential information like contact details, verification status, and related address.'})
export class Workshop {

    /**
     * Identifier of the workshop
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the workshop'})
    workshopId!: bigint;

    /**
     * Identifier of the workshop owner
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the workshop owner'})
    ownerId!: bigint;

    /**
     * Identifier of the workshop address
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:true,description:'Identifier of the workshop address'})
    addressId!: bigint | null;

    /**
     * Email address for workshop contact
     */
    @Field(() => String, {nullable:false,description:'Email address for workshop contact'})
    email!: string;

    /**
     * Contact phone number for the workshop
     */
    @Field(() => String, {nullable:false,description:'Contact phone number for the workshop'})
    telephoneNumber!: string;

    /**
     * Verification status of the workshop
     */
    @Field(() => Boolean, {nullable:true,defaultValue:false,description:'Verification status of the workshop'})
    isVerified!: boolean | null;

    /**
     * Flag indicating if workshop is managing work
     */
    @Field(() => Boolean, {nullable:true,defaultValue:false,description:'Flag indicating if workshop is managing work'})
    isManagingWork!: boolean | null;

    /**
     * Flag indicating if workshop is offering services
     */
    @Field(() => Boolean, {nullable:true,defaultValue:false,description:'Flag indicating if workshop is offering services'})
    isOfferingService!: boolean | null;

    /**
     * Timestamp of workshop creation
     */
    @Field(() => Date, {nullable:false,description:'Timestamp of workshop creation'})
    createdAt!: Date;

    /**
     * Timestamp of last update
     */
    @Field(() => Date, {nullable:true,description:'Timestamp of last update'})
    updatedAt!: Date | null;

    /**
     * Identifier of user who last updated the workshop
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:true,description:'Identifier of user who last updated the workshop'})
    updatedBy!: bigint | null;

    /**
     * Timestamp of workshop deletion
     */
    @Field(() => Date, {nullable:true,description:'Timestamp of workshop deletion'})
    deletedAt!: Date | null;

    /**
     * Address details of the workshop
     */
    @Field(() => Address, {nullable:true,description:'Address details of the workshop'})
    @Type(() => Address)
    address?: Address | null;

    /**
     * Customers associated with this workshop
     */
    @Field(() => [Customer], {nullable:true,description:'Customers associated with this workshop'})
    @Type(() => Customer)
    customers?: Array<Customer>;

    /**
     * Employees working at this workshop
     */
    @Field(() => [Employee], {nullable:true,description:'Employees working at this workshop'})
    @Type(() => Employee)
    employees?: Array<Employee>;

    /**
     * Reviews received by this workshop
     */
    @Field(() => [Review], {nullable:true,description:'Reviews received by this workshop'})
    @Type(() => Review)
    reviews?: Array<Review>;

    /**
     * Service requests received by this workshop
     */
    @Field(() => [ServiceRequest], {nullable:true,description:'Service requests received by this workshop'})
    @Type(() => ServiceRequest)
    serviceRequests?: Array<ServiceRequest>;

    /**
     * Services provided by this workshop
     */
    @Field(() => [Service], {nullable:true,description:'Services provided by this workshop'})
    @Type(() => Service)
    services?: Array<Service>;

    /**
     * Owner of the workshop
     */
    @Field(() => User, {nullable:false,description:'Owner of the workshop'})
    user?: User;

    /**
     * Additional details about the workshop
     */
    @Field(() => WorkshopDetails, {nullable:true,description:'Additional details about the workshop'})
    @Type(() => WorkshopDetails)
    workshopDetails?: WorkshopDetails | null;

    /**
     * Jobs performed at this workshop
     */
    @Field(() => [WorkshopJob], {nullable:true,description:'Jobs performed at this workshop'})
    @Type(() => WorkshopJob)
    workshopJobs?: Array<WorkshopJob>;

    /**
     * Job categories offered by this workshop
     */
    @Field(() => [JobCategory], {nullable:true,description:'Job categories offered by this workshop'})
    @Type(() => JobCategory)
    jobCategories?: Array<JobCategory>;

    /**
     * Join requests for this workshop
     */
    @Field(() => [JoinWorkshopRequest], {nullable:true,description:'Join requests for this workshop'})
    joinWorkshopRequests?: Array<JoinWorkshopRequest>;

    /**
     * OTP device settings for this workshop
     */
    @Field(() => WorkshopDeviceOtp, {nullable:true,description:'OTP device settings for this workshop'})
    WorkshopDeviceOtp?: WorkshopDeviceOtp | null;

    /**
     * Devices registered to this workshop
     */
    @Field(() => [WorkshopDevice], {nullable:true,description:'Devices registered to this workshop'})
    workshopDevices?: Array<WorkshopDevice>;

    @Field(() => WorkshopCount, {nullable:false})
    _count?: WorkshopCount;
}
