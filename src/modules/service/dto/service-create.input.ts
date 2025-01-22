import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { ServiceStatus } from '../../prisma/dto/service-status.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { ServiceRequestCreateNestedOneWithoutApprovedServiceInput } from '../../service-request/dto/service-request-create-nested-one-without-approved-service.input';
import { TaskCreateNestedManyWithoutServiceInput } from '../../task/dto/task-create-nested-many-without-service.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { CustomerCreateNestedOneWithoutServicesInput } from '../../customer/dto/customer-create-nested-one-without-services.input';
import { EmployeeCreateNestedOneWithoutServicesInput } from '../../employee/dto/employee-create-nested-one-without-services.input';
import { VehicleCreateNestedOneWithoutServicesInput } from '../../vehicle/dto/vehicle-create-nested-one-without-services.input';
import { WorkshopCreateNestedOneWithoutServicesInput } from '../../workshop/dto/workshop-create-nested-one-without-services.input';

@InputType()
export class ServiceCreateInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    @Validator.IsOptional()
    serviceRequestId?: bigint | number;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Description must be a string' })
    @Validator.Length(0, 5000, { message: 'Description cannot exceed 5000 characters' })
    @Validator.IsOptional()
    description?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Description must be a string' })
    @Validator.Length(0, 5000, { message: 'Description cannot exceed 5000 characters' })
    @Validator.IsOptional()
    serviceDescription?: string;

    @Field(() => Date, {nullable:true})
    @Validator.IsDate({ message: 'Service start date must be a valid date' })
    @Validator.IsOptional()
    serviceStartDate?: Date | string;

    @Field(() => TaskCreateNestedManyWithoutServiceInput, {nullable:true})
    @Type(() => TaskCreateNestedManyWithoutServiceInput)
    @ValidateNested()
    @Type(() => TaskCreateNestedManyWithoutServiceInput)
    tasks?: TaskCreateNestedManyWithoutServiceInput;

    @Field(() => CustomerCreateNestedOneWithoutServicesInput, {nullable:false})
    @Type(() => CustomerCreateNestedOneWithoutServicesInput)
    @ValidateNested()
    @Type(() => CustomerCreateNestedOneWithoutServicesInput)
    customer!: CustomerCreateNestedOneWithoutServicesInput;

    @Field(() => EmployeeCreateNestedOneWithoutServicesInput, {nullable:false})
    @Type(() => EmployeeCreateNestedOneWithoutServicesInput)
    @ValidateNested()
    @Type(() => EmployeeCreateNestedOneWithoutServicesInput)
    employee!: EmployeeCreateNestedOneWithoutServicesInput;

    @Field(() => VehicleCreateNestedOneWithoutServicesInput, {nullable:false})
    @Type(() => VehicleCreateNestedOneWithoutServicesInput)
    @ValidateNested()
    @Type(() => VehicleCreateNestedOneWithoutServicesInput)
    vehicle!: VehicleCreateNestedOneWithoutServicesInput;

    @Field(() => WorkshopCreateNestedOneWithoutServicesInput, {nullable:false})
    @Type(() => WorkshopCreateNestedOneWithoutServicesInput)
    @ValidateNested()
    @Type(() => WorkshopCreateNestedOneWithoutServicesInput)
    workshop!: WorkshopCreateNestedOneWithoutServicesInput;
}