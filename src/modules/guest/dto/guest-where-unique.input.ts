import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { GuestWhereInput } from './guest-where.input';
import { StringFilter } from '../../prisma/dto/string-filter.input';
import { StringNullableFilter } from '../../prisma/dto/string-nullable-filter.input';
import { VehicleNullableRelationFilter } from '../../vehicle/dto/vehicle-nullable-relation-filter.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ServiceRequestNullableRelationFilter } from '../../service-request/dto/service-request-nullable-relation-filter.input';
import { CustomerNullableRelationFilter } from '../../customer/dto/customer-nullable-relation-filter.input';

@InputType()
export class GuestWhereUniqueInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    guestId?: bigint | number;

    @Field(() => [GuestWhereInput], {nullable:true})
    AND?: Array<GuestWhereInput>;

    @Field(() => [GuestWhereInput], {nullable:true})
    OR?: Array<GuestWhereInput>;

    @Field(() => [GuestWhereInput], {nullable:true})
    NOT?: Array<GuestWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    firstName?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    telephoneNumber?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    email?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    NIP?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    companyName?: StringNullableFilter;

    @Field(() => VehicleNullableRelationFilter, {nullable:true})
    @Type(() => VehicleNullableRelationFilter)
    @ValidateNested()
    @Type(() => VehicleNullableRelationFilter)
    vehicle?: VehicleNullableRelationFilter;

    @Field(() => ServiceRequestNullableRelationFilter, {nullable:true})
    @Type(() => ServiceRequestNullableRelationFilter)
    @ValidateNested()
    @Type(() => ServiceRequestNullableRelationFilter)
    serviceRequest?: ServiceRequestNullableRelationFilter;

    @Field(() => CustomerNullableRelationFilter, {nullable:true})
    @Type(() => CustomerNullableRelationFilter)
    @ValidateNested()
    @Type(() => CustomerNullableRelationFilter)
    customer?: CustomerNullableRelationFilter;
}
