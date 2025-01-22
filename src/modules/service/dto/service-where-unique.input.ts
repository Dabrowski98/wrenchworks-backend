import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { ServiceWhereInput } from './service-where.input';
import { Type } from 'class-transformer';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { StringNullableFilter } from '../../prisma/dto/string-nullable-filter.input';
import { EnumServiceStatusNullableFilter } from '../../prisma/dto/enum-service-status-nullable-filter.input';
import { BoolFilter } from '../../prisma/dto/bool-filter.input';
import { DecimalFilter } from '../../prisma/dto/decimal-filter.input';
import { DateTimeFilter } from '../../prisma/dto/date-time-filter.input';
import { DateTimeNullableFilter } from '../../prisma/dto/date-time-nullable-filter.input';
import { HideField } from '@nestjs/graphql';
import { BigIntNullableFilter } from '../../prisma/dto/big-int-nullable-filter.input';
import { ServiceRequestNullableRelationFilter } from '../../service-request/dto/service-request-nullable-relation-filter.input';
import { ValidateNested } from 'class-validator';
import { TaskListRelationFilter } from '../../task/dto/task-list-relation-filter.input';
import { CustomerRelationFilter } from '../../customer/dto/customer-relation-filter.input';
import { EmployeeRelationFilter } from '../../employee/dto/employee-relation-filter.input';
import { VehicleRelationFilter } from '../../vehicle/dto/vehicle-relation-filter.input';
import { WorkshopRelationFilter } from '../../workshop/dto/workshop-relation-filter.input';

@InputType()
export class ServiceWhereUniqueInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    serviceId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    @Validator.IsOptional()
    serviceRequestId?: bigint | number;

    @Field(() => [ServiceWhereInput], {nullable:true})
    @Type(() => ServiceWhereInput)
    AND?: Array<ServiceWhereInput>;

    @Field(() => [ServiceWhereInput], {nullable:true})
    @Type(() => ServiceWhereInput)
    OR?: Array<ServiceWhereInput>;

    @Field(() => [ServiceWhereInput], {nullable:true})
    @Type(() => ServiceWhereInput)
    NOT?: Array<ServiceWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    workshopId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    vehicleId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    customerId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    employeeId?: BigIntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    serviceDescription?: StringNullableFilter;

    @Field(() => EnumServiceStatusNullableFilter, {nullable:true})
    status?: EnumServiceStatusNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    payedOff?: BoolFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    paymentAmount?: DecimalFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    serviceStartDate?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    serviceEndDate?: DateTimeNullableFilter;

    @Field(() => ServiceRequestNullableRelationFilter, {nullable:true})
    @Type(() => ServiceRequestNullableRelationFilter)
    @ValidateNested()
    @Type(() => ServiceRequestNullableRelationFilter)
    serviceRequest?: ServiceRequestNullableRelationFilter;

    @Field(() => TaskListRelationFilter, {nullable:true})
    @Type(() => TaskListRelationFilter)
    @ValidateNested()
    @Type(() => TaskListRelationFilter)
    tasks?: TaskListRelationFilter;

    @Field(() => CustomerRelationFilter, {nullable:true})
    @Type(() => CustomerRelationFilter)
    @ValidateNested()
    @Type(() => CustomerRelationFilter)
    customer?: CustomerRelationFilter;

    @Field(() => EmployeeRelationFilter, {nullable:true})
    @Type(() => EmployeeRelationFilter)
    @ValidateNested()
    @Type(() => EmployeeRelationFilter)
    employee?: EmployeeRelationFilter;

    @Field(() => VehicleRelationFilter, {nullable:true})
    @Type(() => VehicleRelationFilter)
    @ValidateNested()
    @Type(() => VehicleRelationFilter)
    vehicle?: VehicleRelationFilter;

    @Field(() => WorkshopRelationFilter, {nullable:true})
    @Type(() => WorkshopRelationFilter)
    @ValidateNested()
    @Type(() => WorkshopRelationFilter)
    workshop?: WorkshopRelationFilter;
}