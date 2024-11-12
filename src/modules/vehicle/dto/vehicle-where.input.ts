import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { DateTimeNullableFilter } from '../../prisma/dto/date-time-nullable-filter.input';
import { ServiceRequestListRelationFilter } from '../../service-request/dto/service-request-list-relation-filter.input';
import { Type } from 'class-transformer';
import { ServiceListRelationFilter } from '../../service/dto/service-list-relation-filter.input';
import { VehicleModelRelationFilter } from '../../vehicle-model/dto/vehicle-model-relation-filter.input';
import { PersonRelationFilter } from '../../person/dto/person-relation-filter.input';
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

    @Field(() => BigIntFilter, {nullable:true})
    personId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    modelId?: BigIntFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: DateTimeNullableFilter;

    @Field(() => ServiceRequestListRelationFilter, {nullable:true})
    @Type(() => ServiceRequestListRelationFilter)
    vehicleAssociatedServiceRequests?: ServiceRequestListRelationFilter;

    @Field(() => ServiceListRelationFilter, {nullable:true})
    @Type(() => ServiceListRelationFilter)
    services?: ServiceListRelationFilter;

    @Field(() => VehicleModelRelationFilter, {nullable:true})
    vehicleModel?: VehicleModelRelationFilter;

    @Field(() => PersonRelationFilter, {nullable:true})
    @Type(() => PersonRelationFilter)
    person?: PersonRelationFilter;

    @Field(() => VehicleDetailsNullableRelationFilter, {nullable:true})
    vehiclesDetails?: VehicleDetailsNullableRelationFilter;
}
