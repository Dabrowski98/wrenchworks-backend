import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { HideField } from '@nestjs/graphql';
import { UserStatus } from '../../prisma/dto/user-status.enum';
import { UserRole } from '../../prisma/dto/user-role.enum';
import { Vehicle } from '../../vehicle/dto/vehicle.model';
import { Type } from 'class-transformer';
import { ServiceRequest } from '../../service-request/dto/service-request.model';
import { Customer } from '../../customer/dto/customer.model';
import { Employee } from '../../employee/dto/employee.model';
import { Workshop } from '../../workshop/dto/workshop.model';
import { Review } from '../../review/dto/review.model';
import { ReviewResponse } from '../../review-response/dto/review-response.model';
import { UserReport } from '../../user-report/dto/user-report.model';
import { JoinWorkshopRequest } from '../../join-workshop-request/dto/join-workshop-request.model';
import { SessionData } from '../../session-data/dto/session-data.model';
import { UserCount } from './user-count.output';

/**
 * The User model stores account details for users, including authentication credentials and profile information.
 * It manages relationships with vehicles, service requests, reviews, and other user-related activities.
 */
@ObjectType({description:'The User model stores account details for users, including authentication credentials and profile information.\nIt manages relationships with vehicles, service requests, reviews, and other user-related activities.'})
export class User {

    /**
     * Identifier of the user
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the user'})
    userId!: bigint;

    /**
     * Username for account login
     */
    @Field(() => String, {nullable:false,description:'Username for account login'})
    username!: string;

    /**
     * Password for account authentication
     * Note: Password will be hashed before storage
     */
    /**
     * Email address for account
     */
    @Field(() => String, {nullable:false,description:'Email address for account'})
    email!: string;

    /**
     * Contact phone number
     */
    @Field(() => String, {nullable:false,description:'Contact phone number'})
    telephoneNumber!: string;

    /**
     * URL to user's avatar image
     */
    @Field(() => String, {nullable:true,description:"URL to user's avatar image"})
    avatarURL!: string | null;

    /**
     * Account verification status
     */
    @Field(() => Boolean, {nullable:true,defaultValue:false,description:'Account verification status'})
    isVerified!: boolean | null;

    /**
     * Current status of the user account
     */
    @Field(() => UserStatus, {nullable:true,defaultValue:'INACTIVE',description:'Current status of the user account'})
    status!: keyof typeof UserStatus | null;

    /**
     * User's first name
     */
    @Field(() => String, {nullable:true,description:"User's first name"})
    firstName!: string | null;

    /**
     * User's last name
     */
    @Field(() => String, {nullable:true,description:"User's last name"})
    lastName!: string | null;

    /**
     * Role assigned to the user
     */
    @Field(() => UserRole, {nullable:false,defaultValue:'USER',description:'Role assigned to the user'})
    role!: keyof typeof UserRole;

    /**
     * Timestamp of account creation
     */
    @Field(() => Date, {nullable:false,description:'Timestamp of account creation'})
    createdAt!: Date;

    /**
     * Timestamp of last update
     */
    @Field(() => Date, {nullable:true,description:'Timestamp of last update'})
    updatedAt!: Date | null;

    /**
     * Timestamp of account deletion
     */
    @Field(() => Date, {nullable:true,description:'Timestamp of account deletion'})
    deletedAt!: Date | null;

    /**
     * Vehicles associated with the user
     */
    @Field(() => [Vehicle], {nullable:true,description:'Vehicles associated with the user'})
    @Type(() => Vehicle)
    vehicles?: Array<Vehicle>;

    /**
     * Service requests made by the user
     */
    @Field(() => [ServiceRequest], {nullable:true,description:'Service requests made by the user'})
    @Type(() => ServiceRequest)
    serviceRequests?: Array<ServiceRequest>;

    /**
     * Customer profiles associated with the user
     */
    @Field(() => [Customer], {nullable:true,description:'Customer profiles associated with the user'})
    @Type(() => Customer)
    customers?: Array<Customer>;

    /**
     * Employee profiles associated with the user
     */
    @Field(() => [Employee], {nullable:true,description:'Employee profiles associated with the user'})
    @Type(() => Employee)
    employees?: Array<Employee>;

    /**
     * Workshops owned by the user
     */
    @Field(() => [Workshop], {nullable:true,description:'Workshops owned by the user'})
    @Type(() => Workshop)
    workshops?: Array<Workshop>;

    /**
     * Reviews written by the user
     */
    @Field(() => [Review], {nullable:true,description:'Reviews written by the user'})
    @Type(() => Review)
    reviews?: Array<Review>;

    /**
     * Review responses written by the user
     */
    @Field(() => [ReviewResponse], {nullable:true,description:'Review responses written by the user'})
    @Type(() => ReviewResponse)
    reviewResponses?: Array<ReviewResponse>;

    /**
     * Reports submitted by the user
     */
    @Field(() => [UserReport], {nullable:true,description:'Reports submitted by the user'})
    @Type(() => UserReport)
    userReports?: Array<UserReport>;

    /**
     * Workshop join requests made by the user
     */
    @Field(() => [JoinWorkshopRequest], {nullable:true,description:'Workshop join requests made by the user'})
    joinWorkshopRequests?: Array<JoinWorkshopRequest>;

    /**
     * Session data for the user
     */
    @Field(() => [SessionData], {nullable:true,description:'Session data for the user'})
    sessionData?: Array<SessionData>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}