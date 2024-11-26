import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { ServicesStatus } from '../../prisma/dto/services-status.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { ServiceRequestCreateNestedOneWithoutApprovedServiceInput } from '../../service-request/dto/service-request-create-nested-one-without-approved-service.input';
import { TaskCreateNestedManyWithoutServiceInput } from '../../task/dto/task-create-nested-many-without-service.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { EmployeeCreateNestedOneWithoutServicesInput } from '../../employee/dto/employee-create-nested-one-without-services.input';
import { VehicleCreateNestedOneWithoutServicesInput } from '../../vehicle/dto/vehicle-create-nested-one-without-services.input';
import { WorkshopCreateNestedOneWithoutServicesInput } from '../../workshop/dto/workshop-create-nested-one-without-services.input';

@InputType()
export class ServiceCreateWithoutCustomerInput {

    @HideField()
    serviceId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    @Validator.IsOptional()
    serviceRequestId?: bigint | number;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Description must be a string' })
    @Validator.Length(0, 5000, { message: 'Description cannot exceed 5000 characters' })
    @Validator.IsOptional()
    description?: string;

    @HideField()
    status?: keyof typeof ServicesStatus;

    @HideField()
    payedOff?: boolean;

    @HideField()
    paymentAmount?: Decimal;

    @Field(() => Date, {nullable:true})
    @Validator.IsDate({ message: 'Service start date must be a valid date' })
    @Validator.IsOptional()
    serviceStartDate?: Date | string;

    @HideField()
    serviceEndDate?: Date | string;

    @Field(() => Date, {nullable:true})
    addedAt?: Date | string;

    @Field(() => String, {nullable:true})
    addedBy?: bigint | number;

    @Field(() => Date, {nullable:true})
    @HideField()
    resolvedAt?: Date | string;

    @Field(() => String, {nullable:true})
    @HideField()
    resolvedBy?: bigint | number;

    @Field(() => Date, {nullable:true})
    @HideField()
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    @HideField()
    updatedBy?: bigint | number;

    @Field(() => Date, {nullable:true})
    @HideField()
    deletedAt?: Date | string;

    @HideField()
    serviceRequest?: ServiceRequestCreateNestedOneWithoutApprovedServiceInput;

    @Field(() => TaskCreateNestedManyWithoutServiceInput, {nullable:true})
    @Type(() => TaskCreateNestedManyWithoutServiceInput)
    @ValidateNested()
    @Type(() => TaskCreateNestedManyWithoutServiceInput)
    tasks?: TaskCreateNestedManyWithoutServiceInput;

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
