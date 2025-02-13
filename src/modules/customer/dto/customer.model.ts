import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { CustomerCreationSource } from '../../prisma/dto/customer-creation-source.enum';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { Service } from '../../service/dto/service.model';
import { Type } from 'class-transformer';
import { Guest } from '../../guest/dto/guest.model';
import { User } from '../../user/dto/user.model';
import { Vehicle } from '../../vehicle/dto/vehicle.model';
import { Workshop } from '../../workshop/dto/workshop.model';
import { CustomerCount } from './customer-count.output';

/**
 * The Customer model stores information about customers including their personal details and contact information.
 * It also maintains relationships with workshops, vehicles, and orders in the system.
 */
@ObjectType({description:'The Customer model stores information about customers including their personal details and contact information.\nIt also maintains relationships with workshops, vehicles, and orders in the system.'})
export class Customer {

    /**
     * Identifier of the customer
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the customer'})
    customerId!: bigint;

    /**
     * Identifier of the workshop this customer belongs to
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the workshop this customer belongs to'})
    workshopId!: bigint;

    /**
     * Identifier of the user account
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:true,description:'Identifier of the user account'})
    userId!: bigint | null;

    /**
     * Identifier of the guest account
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:true,description:'Identifier of the guest account'})
    guestId!: bigint | null;

    /**
     * First name of the customer
     */
    @Field(() => String, {nullable:true,description:'First name of the customer'})
    firstName!: string | null;

    /**
     * Source of customer creation (GUEST, WORKSHOP, USER)
     */
    @Field(() => CustomerCreationSource, {nullable:false,description:'Source of customer creation (GUEST, WORKSHOP, USER)'})
    creationSource!: keyof typeof CustomerCreationSource;

    /**
     * Contact phone number
     */
    @Field(() => String, {nullable:true,description:'Contact phone number'})
    telephoneNumber!: string | null;

    /**
     * Email address
     */
    @Field(() => String, {nullable:true,description:'Email address'})
    email!: string | null;

    /**
     * Verification status
     */
    @Field(() => Boolean, {nullable:false,defaultValue:false,description:'Verification status'})
    isVerified!: boolean;

    /**
     * Total amount due from customer
     * Note: Optional because it defaults to 0.00
     */
    @Field(() => GraphQLDecimal, {nullable:false,defaultValue:0,description:'Total amount due from customer\nNote: Optional because it defaults to 0.00'})
    totalDue!: Decimal;

    /**
     * Additional notes or description about the customer
     */
    @Field(() => String, {nullable:true,description:'Additional notes or description about the customer'})
    description!: string | null;

    /**
     * Tax identification number
     */
    @Field(() => String, {nullable:true,description:'Tax identification number'})
    NIP!: string | null;

    /**
     * Name of the company
     */
    @Field(() => String, {nullable:true,description:'Name of the company'})
    companyName!: string | null;

    /**
     * Timestamp of when the record was deleted
     */
    @Field(() => Date, {nullable:true,description:'Timestamp of when the record was deleted'})
    deletedAt!: Date | null;

    /**
     * Timestamp of record creation
     */
    @Field(() => Date, {nullable:false,description:'Timestamp of record creation'})
    createdAt!: Date;

    /**
     * Identifier of user who created the record
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:true,description:'Identifier of user who created the record'})
    createdBy!: bigint | null;

    /**
     * Timestamp of last update
     */
    @Field(() => Date, {nullable:true,description:'Timestamp of last update'})
    updatedAt!: Date | null;

    /**
     * Identifier of user who last updated the record
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:true,description:'Identifier of user who last updated the record'})
    updatedBy!: bigint | null;

    /**
     * Services associated with this customer
     */
    @Field(() => [Service], {nullable:true,description:'Services associated with this customer'})
    @Type(() => Service)
    services?: Array<Service>;

    /**
     * Guest account associated with this customer
     */
    @Field(() => Guest, {nullable:true,description:'Guest account associated with this customer'})
    guest?: Guest | null;

    /**
     * User account associated with this customer
     */
    @Field(() => User, {nullable:true,description:'User account associated with this customer'})
    user?: User | null;

    /**
     * Vehicles owned by this customer
     */
    @Field(() => [Vehicle], {nullable:true,description:'Vehicles owned by this customer'})
    @Type(() => Vehicle)
    vehicles?: Array<Vehicle>;

    /**
     * Workshop this customer belongs to
     */
    @Field(() => Workshop, {nullable:false,description:'Workshop this customer belongs to'})
    @Type(() => Workshop)
    workshop?: Workshop;

    @Field(() => CustomerCount, {nullable:false})
    _count?: CustomerCount;
}
