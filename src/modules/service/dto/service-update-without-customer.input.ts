import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { ServicesStatus } from '../../prisma/dto/services-status.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { ServiceRequestUpdateOneWithoutApprovedServiceNestedInput } from '../../service-request/dto/service-request-update-one-without-approved-service-nested.input';
import { TaskUpdateManyWithoutServiceNestedInput } from '../../task/dto/task-update-many-without-service-nested.input';
import { EmployeeUpdateOneRequiredWithoutServicesNestedInput } from '../../employee/dto/employee-update-one-required-without-services-nested.input';
import { VehicleUpdateOneRequiredWithoutServicesNestedInput } from '../../vehicle/dto/vehicle-update-one-required-without-services-nested.input';
import { WorkshopUpdateOneRequiredWithoutServicesNestedInput } from '../../workshop/dto/workshop-update-one-required-without-services-nested.input';

@InputType()
export class ServiceUpdateWithoutCustomerInput {

    @HideField()
    serviceId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    serviceRequestId?: bigint | number;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Description must be a string' })
    @Validator.Length(0, 5000, { message: 'Description cannot exceed 5000 characters' })
    @Validator.IsOptional()
    description?: string;

    @Field(() => ServicesStatus, {nullable:true})
    @Validator.IsEnum(ServicesStatus, { message: 'Invalid service status' })
    status?: keyof typeof ServicesStatus;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Payed off must be a boolean' })
    payedOff?: boolean;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    @Validator.IsNumber({}, { message: 'Payment amount must be a number' })
    @Validator.Min(0, { message: 'Payment amount cannot be negative' })
    @Validator.Max(9999999.99, { message: 'Payment amount cannot exceed 9999999.99' })
    paymentAmount?: Decimal;

    @Field(() => Date, {nullable:true})
    @Validator.IsDate({ message: 'Service start date must be a valid date' })
    serviceStartDate?: Date | string;

    @Field(() => Date, {nullable:true})
    @Validator.IsDate({ message: 'Service end date must be a valid date' })
    @Validator.IsOptional()
    serviceEndDate?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => ServiceRequestUpdateOneWithoutApprovedServiceNestedInput, {nullable:true})
    @Type(() => ServiceRequestUpdateOneWithoutApprovedServiceNestedInput)
    serviceRequest?: ServiceRequestUpdateOneWithoutApprovedServiceNestedInput;

    @Field(() => TaskUpdateManyWithoutServiceNestedInput, {nullable:true})
    @Type(() => TaskUpdateManyWithoutServiceNestedInput)
    tasks?: TaskUpdateManyWithoutServiceNestedInput;

    @Field(() => EmployeeUpdateOneRequiredWithoutServicesNestedInput, {nullable:true})
    @Type(() => EmployeeUpdateOneRequiredWithoutServicesNestedInput)
    employee?: EmployeeUpdateOneRequiredWithoutServicesNestedInput;

    @Field(() => VehicleUpdateOneRequiredWithoutServicesNestedInput, {nullable:true})
    @Type(() => VehicleUpdateOneRequiredWithoutServicesNestedInput)
    vehicle?: VehicleUpdateOneRequiredWithoutServicesNestedInput;

    @Field(() => WorkshopUpdateOneRequiredWithoutServicesNestedInput, {nullable:true})
    @Type(() => WorkshopUpdateOneRequiredWithoutServicesNestedInput)
    workshop?: WorkshopUpdateOneRequiredWithoutServicesNestedInput;
}
