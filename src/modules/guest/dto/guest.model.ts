import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Vehicle } from '../../vehicle/dto/vehicle.model';
import { Type } from 'class-transformer';
import { ServiceRequest } from '../../service-request/dto/service-request.model';
import { Customer } from '../../customer/dto/customer.model';

/**
 * Note: When service request is accepted guest is removed and customer is updated with service request id. Updated and deleted automatically.
 */
@ObjectType({description:'Note: When service request is accepted guest is removed and customer is updated with service request id. Updated and deleted automatically.'})
export class Guest {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    guestId!: bigint;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:true})
    telephoneNumber!: string | null;

    @Field(() => String, {nullable:true})
    email!: string | null;

    @Field(() => String, {nullable:true})
    NIP!: string | null;

    @Field(() => String, {nullable:true})
    companyName!: string | null;

    @Field(() => Vehicle, {nullable:true})
    @Type(() => Vehicle)
    vehicle?: Vehicle | null;

    @Field(() => ServiceRequest, {nullable:true})
    @Type(() => ServiceRequest)
    serviceRequest?: ServiceRequest | null;

    @Field(() => Customer, {nullable:true})
    @Type(() => Customer)
    customer?: Customer | null;
}
