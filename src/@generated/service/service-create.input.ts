import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { ServicesStatus } from '../prisma/services-status.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { ServiceRequestCreateNestedOneWithoutApprovedServiceInput } from '../service-request/service-request-create-nested-one-without-approved-service.input';
import { TaskCreateNestedManyWithoutServiceInput } from '../task/task-create-nested-many-without-service.input';
import { CustomerCreateNestedOneWithoutServicesInput } from '../customer/customer-create-nested-one-without-services.input';
import { EmployeeCreateNestedOneWithoutServicesInput } from '../employee/employee-create-nested-one-without-services.input';
import { VehicleCreateNestedOneWithoutServicesInput } from '../vehicle/vehicle-create-nested-one-without-services.input';
import { WorkshopCreateNestedOneWithoutServicesInput } from '../workshop/workshop-create-nested-one-without-services.input';

@InputType()
export class ServiceCreateInput {

    @HideField()
    serviceId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    serviceRequestId?: bigint | number;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => ServicesStatus, {nullable:true})
    status?: keyof typeof ServicesStatus;

    @Field(() => Boolean, {nullable:true})
    payedOff?: boolean;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    paymentAmount?: Decimal;

    @Field(() => Date, {nullable:true})
    serviceStartDate?: Date | string;

    @Field(() => Date, {nullable:true})
    serviceEndDate?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => ServiceRequestCreateNestedOneWithoutApprovedServiceInput, {nullable:true})
    @Type(() => ServiceRequestCreateNestedOneWithoutApprovedServiceInput)
    serviceRequest?: ServiceRequestCreateNestedOneWithoutApprovedServiceInput;

    @Field(() => TaskCreateNestedManyWithoutServiceInput, {nullable:true})
    @Type(() => TaskCreateNestedManyWithoutServiceInput)
    tasks?: TaskCreateNestedManyWithoutServiceInput;

    @Field(() => CustomerCreateNestedOneWithoutServicesInput, {nullable:false})
    @Type(() => CustomerCreateNestedOneWithoutServicesInput)
    customer!: CustomerCreateNestedOneWithoutServicesInput;

    @Field(() => EmployeeCreateNestedOneWithoutServicesInput, {nullable:false})
    @Type(() => EmployeeCreateNestedOneWithoutServicesInput)
    employee!: EmployeeCreateNestedOneWithoutServicesInput;

    @Field(() => VehicleCreateNestedOneWithoutServicesInput, {nullable:false})
    @Type(() => VehicleCreateNestedOneWithoutServicesInput)
    vehicle!: VehicleCreateNestedOneWithoutServicesInput;

    @Field(() => WorkshopCreateNestedOneWithoutServicesInput, {nullable:false})
    @Type(() => WorkshopCreateNestedOneWithoutServicesInput)
    workshop!: WorkshopCreateNestedOneWithoutServicesInput;
}
