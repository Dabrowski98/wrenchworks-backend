import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { ServiceWhereInput } from './service-where.input';
import { Type } from 'class-transformer';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { StringNullableFilter } from '../../prisma/dto/string-nullable-filter.input';
import { EnumServicesStatusNullableFilter } from '../../prisma/dto/enum-services-status-nullable-filter.input';
import { BoolFilter } from '../../prisma/dto/bool-filter.input';
import { DecimalFilter } from '../../prisma/dto/decimal-filter.input';
import { DateTimeFilter } from '../../prisma/dto/date-time-filter.input';
import { DateTimeNullableFilter } from '../../prisma/dto/date-time-nullable-filter.input';
import { ServiceRequestNullableRelationFilter } from '../../service-request/dto/service-request-nullable-relation-filter.input';
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

    @Field(() => EnumServicesStatusNullableFilter, {nullable:true})
    status?: EnumServicesStatusNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    payedOff?: BoolFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    paymentAmount?: DecimalFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    serviceStartDate?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    serviceEndDate?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: DateTimeNullableFilter;

    @Field(() => ServiceRequestNullableRelationFilter, {nullable:true})
    @Type(() => ServiceRequestNullableRelationFilter)
    serviceRequest?: ServiceRequestNullableRelationFilter;

    @Field(() => TaskListRelationFilter, {nullable:true})
    @Type(() => TaskListRelationFilter)
    tasks?: TaskListRelationFilter;

    @Field(() => CustomerRelationFilter, {nullable:true})
    @Type(() => CustomerRelationFilter)
    customer?: CustomerRelationFilter;

    @Field(() => EmployeeRelationFilter, {nullable:true})
    @Type(() => EmployeeRelationFilter)
    employee?: EmployeeRelationFilter;

    @Field(() => VehicleRelationFilter, {nullable:true})
    @Type(() => VehicleRelationFilter)
    vehicle?: VehicleRelationFilter;

    @Field(() => WorkshopRelationFilter, {nullable:true})
    @Type(() => WorkshopRelationFilter)
    workshop?: WorkshopRelationFilter;
}
