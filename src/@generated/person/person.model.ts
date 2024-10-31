import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { AddressPerson } from '../address-person/address-person.model';
import { Customer } from '../customer/customer.model';
import { Employee } from '../employee/employee.model';
import { ServiceRequest } from '../service-request/service-request.model';
import { User } from '../user/user.model';
import { Vehicle } from '../vehicle/vehicle.model';
import { Workshop } from '../workshop/workshop.model';
import { PersonCount } from './person-count.output';

@ObjectType()
export class Person {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    personId!: bigint;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:true})
    telephoneNumber!: string | null;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => [AddressPerson], {nullable:true})
    personAddresses?: Array<AddressPerson>;

    @Field(() => [Customer], {nullable:true})
    customers?: Array<Customer>;

    @Field(() => [Employee], {nullable:true})
    employees?: Array<Employee>;

    @Field(() => [ServiceRequest], {nullable:true})
    serviceRequests?: Array<ServiceRequest>;

    @Field(() => User, {nullable:true})
    user?: User | null;

    @Field(() => [Vehicle], {nullable:true})
    vehicles?: Array<Vehicle>;

    @Field(() => [Workshop], {nullable:true})
    workshops?: Array<Workshop>;

    @Field(() => PersonCount, {nullable:false})
    _count?: PersonCount;
}
