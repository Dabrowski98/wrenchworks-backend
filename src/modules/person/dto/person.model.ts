import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Address } from '../../address/dto/address.model';
import { Customer } from '../../customer/dto/customer.model';
import { Employee } from '../../employee/dto/employee.model';
import { ServiceRequest } from '../../service-request/dto/service-request.model';
import { User } from '../../user/dto/user.model';
import { Vehicle } from '../../vehicle/dto/vehicle.model';
import { Workshop } from '../../workshop/dto/workshop.model';
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

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    addressId!: bigint | null;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => Address, {nullable:true})
    address?: Address | null;

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
