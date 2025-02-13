import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Vehicle } from '../../vehicle/dto/vehicle.model';
import { Type } from 'class-transformer';
import { ServiceRequest } from '../../service-request/dto/service-request.model';
import { Customer } from '../../customer/dto/customer.model';

/**
 * The Guest model captures details for guest users who may interact with the system without full account registration.
 * It associates guest actions with other entities such as vehicles and service requests.
 */
@ObjectType({description:'The Guest model captures details for guest users who may interact with the system without full account registration.\nIt associates guest actions with other entities such as vehicles and service requests.'})
export class Guest {

    /**
     * Identifier of the guest
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the guest'})
    guestId!: bigint;

    /**
     * First name of the guest
     */
    @Field(() => String, {nullable:false,description:'First name of the guest'})
    firstName!: string;

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
     * Associated vehicle
     */
    @Field(() => Vehicle, {nullable:true,description:'Associated vehicle'})
    @Type(() => Vehicle)
    vehicle?: Vehicle | null;

    /**
     * Associated service request
     */
    @Field(() => ServiceRequest, {nullable:true,description:'Associated service request'})
    @Type(() => ServiceRequest)
    serviceRequest?: ServiceRequest | null;

    /**
     * Associated customer record
     */
    @Field(() => Customer, {nullable:true,description:'Associated customer record'})
    @Type(() => Customer)
    customer?: Customer | null;
}
