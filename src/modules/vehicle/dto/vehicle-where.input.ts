import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { BigIntNullableFilter } from '../../prisma/dto/big-int-nullable-filter.input';
import { DateTimeNullableFilter } from '../../prisma/dto/date-time-nullable-filter.input';
import { HideField } from '@nestjs/graphql';
import { ServiceRequestListRelationFilter } from '../../service-request/dto/service-request-list-relation-filter.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ServiceListRelationFilter } from '../../service/dto/service-list-relation-filter.input';
import { VehicleModelRelationFilter } from '../../vehicle-model/dto/vehicle-model-relation-filter.input';
import { UserNullableRelationFilter } from '../../user/dto/user-nullable-relation-filter.input';
import { CustomerNullableRelationFilter } from '../../customer/dto/customer-nullable-relation-filter.input';
import { GuestNullableRelationFilter } from '../../guest/dto/guest-nullable-relation-filter.input';
import { VehicleDetailsNullableRelationFilter } from '../../vehicle-details/dto/vehicle-details-nullable-relation-filter.input';

@InputType()
export class VehicleWhereInput {

    @Field(() => [VehicleWhereInput], {nullable:true})
    AND?: Array<VehicleWhereInput>;

    @Field(() => [VehicleWhereInput], {nullable:true})
    OR?: Array<VehicleWhereInput>;

    @Field(() => [VehicleWhereInput], {nullable:true})
    NOT?: Array<VehicleWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    vehicleId?: BigIntFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    userId?: BigIntNullableFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    guestId?: BigIntNullableFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    customerId?: BigIntNullableFilter;

    @Field(() => BigIntFilter, {nullable:true})
    modelId?: BigIntFilter;

    @Field(() => ServiceRequestListRelationFilter, {nullable:true})
    @Type(() => ServiceRequestListRelationFilter)
    @ValidateNested()
    @Type(() => ServiceRequestListRelationFilter)
    serviceRequests?: ServiceRequestListRelationFilter;

    @Field(() => ServiceListRelationFilter, {nullable:true})
    @Type(() => ServiceListRelationFilter)
    @ValidateNested()
    @Type(() => ServiceListRelationFilter)
    services?: ServiceListRelationFilter;

    @Field(() => VehicleModelRelationFilter, {nullable:true})
    @ValidateNested()
    @Type(() => VehicleModelRelationFilter)
    vehicleModel?: VehicleModelRelationFilter;

    @Field(() => UserNullableRelationFilter, {nullable:true})
    @Type(() => UserNullableRelationFilter)
    @ValidateNested()
    user?: UserNullableRelationFilter;

    @Field(() => CustomerNullableRelationFilter, {nullable:true})
    @Type(() => CustomerNullableRelationFilter)
    @ValidateNested()
    @Type(() => CustomerNullableRelationFilter)
    customer?: CustomerNullableRelationFilter;

    @Field(() => GuestNullableRelationFilter, {nullable:true})
    @Type(() => GuestNullableRelationFilter)
    guest?: GuestNullableRelationFilter;

    @Field(() => VehicleDetailsNullableRelationFilter, {nullable:true})
    @ValidateNested()
    vehicleDetails?: VehicleDetailsNullableRelationFilter;
}