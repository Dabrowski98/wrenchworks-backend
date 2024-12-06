import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { HideField } from '@nestjs/graphql';
import { UsersStatus } from '../../prisma/dto/users-status.enum';
import { UserRole } from '../../prisma/dto/user-role.enum';
import { Address } from '../../address/dto/address.model';
import { Type } from 'class-transformer';
import { Vehicle } from '../../vehicle/dto/vehicle.model';
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
 * Note: CREATE USER ONLY IF PHONE NUMBER IS CONFIRMED.
 */
@ObjectType({description:'Note: CREATE USER ONLY IF PHONE NUMBER IS CONFIRMED.'})
export class User {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    userId!: bigint;

    @Field(() => String, {nullable:false})
    username!: string;

    /**
     * Note: Password will be hashed before storage
     */
    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    telephoneNumber!: string;

    @Field(() => String, {nullable:true})
    avatarURL!: string | null;

    @Field(() => Boolean, {nullable:true,defaultValue:false})
    isVerified!: boolean | null;

    @Field(() => UsersStatus, {nullable:true,defaultValue:'INACTIVE'})
    status!: keyof typeof UsersStatus | null;

    @Field(() => String, {nullable:true})
    firstName!: string | null;

    @Field(() => String, {nullable:true})
    lastName!: string | null;

    @Field(() => UserRole, {nullable:false,defaultValue:'USER'})
    role!: keyof typeof UserRole;

    @Field(() => String, {nullable:true})
    addressId!: bigint | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => Address, {nullable:true})
    @Type(() => Address)
    address?: Address | null;

    @Field(() => [Vehicle], {nullable:true})
    @Type(() => Vehicle)
    vehicles?: Array<Vehicle>;

    @Field(() => [ServiceRequest], {nullable:true})
    @Type(() => ServiceRequest)
    serviceRequests?: Array<ServiceRequest>;

    @Field(() => [Customer], {nullable:true})
    @Type(() => Customer)
    customers?: Array<Customer>;

    @Field(() => [Employee], {nullable:true})
    @Type(() => Employee)
    employees?: Array<Employee>;

    @Field(() => [Workshop], {nullable:true})
    @Type(() => Workshop)
    workshops?: Array<Workshop>;

    @Field(() => [Review], {nullable:true})
    @Type(() => Review)
    reviews?: Array<Review>;

    @Field(() => [ReviewResponse], {nullable:true})
    @Type(() => ReviewResponse)
    reviewResponses?: Array<ReviewResponse>;

    @Field(() => [UserReport], {nullable:true})
    @Type(() => UserReport)
    userReports?: Array<UserReport>;

    @Field(() => [JoinWorkshopRequest], {nullable:true})
    joinWorkshopRequests?: Array<JoinWorkshopRequest>;

    @Field(() => [SessionData], {nullable:true})
    sessionData?: Array<SessionData>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}