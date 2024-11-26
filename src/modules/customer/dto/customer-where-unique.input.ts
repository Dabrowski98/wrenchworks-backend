import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { CustomerWhereInput } from './customer-where.input';
import { Type } from 'class-transformer';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { BigIntNullableFilter } from '../../prisma/dto/big-int-nullable-filter.input';
import { StringNullableFilter } from '../../prisma/dto/string-nullable-filter.input';
import { EnumCustomerCreationSourceFilter } from '../../prisma/dto/enum-customer-creation-source-filter.input';
import { BoolFilter } from '../../prisma/dto/bool-filter.input';
import { DecimalFilter } from '../../prisma/dto/decimal-filter.input';
import { DateTimeNullableFilter } from '../../prisma/dto/date-time-nullable-filter.input';
import { HideField } from '@nestjs/graphql';
import { ServiceListRelationFilter } from '../../service/dto/service-list-relation-filter.input';
import { ValidateNested } from 'class-validator';
import { GuestNullableRelationFilter } from '../../guest/dto/guest-nullable-relation-filter.input';
import { UserNullableRelationFilter } from '../../user/dto/user-nullable-relation-filter.input';
import { VehicleListRelationFilter } from '../../vehicle/dto/vehicle-list-relation-filter.input';
import { WorkshopRelationFilter } from '../../workshop/dto/workshop-relation-filter.input';

@InputType()
export class CustomerWhereUniqueInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    customerId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    guestId?: bigint | number;

    @Field(() => [CustomerWhereInput], {nullable:true})
    @Type(() => CustomerWhereInput)
    AND?: Array<CustomerWhereInput>;

    @Field(() => [CustomerWhereInput], {nullable:true})
    @Type(() => CustomerWhereInput)
    OR?: Array<CustomerWhereInput>;

    @Field(() => [CustomerWhereInput], {nullable:true})
    @Type(() => CustomerWhereInput)
    NOT?: Array<CustomerWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    workshopId?: BigIntFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    userId?: BigIntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    firstName?: StringNullableFilter;

    @Field(() => EnumCustomerCreationSourceFilter, {nullable:true})
    creationSource?: EnumCustomerCreationSourceFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    telephoneNumber?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    email?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isVerified?: BoolFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    totalDue?: DecimalFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    NIP?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    companyName?: StringNullableFilter;

    @HideField()
    deletedAt?: DateTimeNullableFilter;

    @HideField()
    createdAt?: DateTimeNullableFilter;

    @HideField()
    createdBy?: BigIntNullableFilter;

    @HideField()
    updatedAt?: DateTimeNullableFilter;

    @HideField()
    updatedBy?: BigIntNullableFilter;

    @Field(() => ServiceListRelationFilter, {nullable:true})
    @Type(() => ServiceListRelationFilter)
    @ValidateNested()
    @Type(() => ServiceListRelationFilter)
    services?: ServiceListRelationFilter;

    @Field(() => GuestNullableRelationFilter, {nullable:true})
    @Type(() => GuestNullableRelationFilter)
    guest?: GuestNullableRelationFilter;

    @Field(() => UserNullableRelationFilter, {nullable:true})
    @Type(() => UserNullableRelationFilter)
    user?: UserNullableRelationFilter;

    @Field(() => VehicleListRelationFilter, {nullable:true})
    @Type(() => VehicleListRelationFilter)
    @ValidateNested()
    @Type(() => VehicleListRelationFilter)
    vehicles?: VehicleListRelationFilter;

    @Field(() => WorkshopRelationFilter, {nullable:true})
    @Type(() => WorkshopRelationFilter)
    @ValidateNested()
    @Type(() => WorkshopRelationFilter)
    workshop?: WorkshopRelationFilter;
}
