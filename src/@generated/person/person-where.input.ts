import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BigIntNullableFilter } from '../prisma/big-int-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { AddressNullableRelationFilter } from '../address/address-nullable-relation-filter.input';
import { CustomerListRelationFilter } from '../customer/customer-list-relation-filter.input';
import { Type } from 'class-transformer';
import { EmployeeListRelationFilter } from '../employee/employee-list-relation-filter.input';
import { ServiceRequestListRelationFilter } from '../service-request/service-request-list-relation-filter.input';
import { UserNullableRelationFilter } from '../user/user-nullable-relation-filter.input';
import { VehicleListRelationFilter } from '../vehicle/vehicle-list-relation-filter.input';
import { WorkshopListRelationFilter } from '../workshop/workshop-list-relation-filter.input';

@InputType()
export class PersonWhereInput {

    @Field(() => [PersonWhereInput], {nullable:true})
    AND?: Array<PersonWhereInput>;

    @Field(() => [PersonWhereInput], {nullable:true})
    OR?: Array<PersonWhereInput>;

    @Field(() => [PersonWhereInput], {nullable:true})
    NOT?: Array<PersonWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    personId?: BigIntFilter;

    @Field(() => StringFilter, {nullable:true})
    firstName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    lastName?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    telephoneNumber?: StringNullableFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    addressId?: BigIntNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: DateTimeNullableFilter;

    @Field(() => AddressNullableRelationFilter, {nullable:true})
    address?: AddressNullableRelationFilter;

    @Field(() => CustomerListRelationFilter, {nullable:true})
    @Type(() => CustomerListRelationFilter)
    customers?: CustomerListRelationFilter;

    @Field(() => EmployeeListRelationFilter, {nullable:true})
    @Type(() => EmployeeListRelationFilter)
    employees?: EmployeeListRelationFilter;

    @Field(() => ServiceRequestListRelationFilter, {nullable:true})
    @Type(() => ServiceRequestListRelationFilter)
    serviceRequests?: ServiceRequestListRelationFilter;

    @Field(() => UserNullableRelationFilter, {nullable:true})
    @Type(() => UserNullableRelationFilter)
    user?: UserNullableRelationFilter;

    @Field(() => VehicleListRelationFilter, {nullable:true})
    @Type(() => VehicleListRelationFilter)
    vehicles?: VehicleListRelationFilter;

    @Field(() => WorkshopListRelationFilter, {nullable:true})
    @Type(() => WorkshopListRelationFilter)
    workshops?: WorkshopListRelationFilter;
}
