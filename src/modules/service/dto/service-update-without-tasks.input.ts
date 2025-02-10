import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { ServiceStatus } from '../../prisma/dto/service-status.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { ServiceRequestUpdateOneWithoutApprovedServiceNestedInput } from '../../service-request/dto/service-request-update-one-without-approved-service-nested.input';
import { CustomerUpdateOneRequiredWithoutServicesNestedInput } from '../../customer/dto/customer-update-one-required-without-services-nested.input';
import { EmployeeUpdateOneRequiredWithoutServicesNestedInput } from '../../employee/dto/employee-update-one-required-without-services-nested.input';
import { VehicleUpdateOneRequiredWithoutServicesNestedInput } from '../../vehicle/dto/vehicle-update-one-required-without-services-nested.input';
import { ValidateNested } from 'class-validator';
import { WorkshopUpdateOneRequiredWithoutServicesNestedInput } from '../../workshop/dto/workshop-update-one-required-without-services-nested.input';

@InputType()
export class ServiceUpdateWithoutTasksInput {

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

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Description must be a string' })
    @Validator.Length(0, 5000, { message: 'Description cannot exceed 5000 characters' })
    @Validator.IsOptional()
    serviceDescription?: string;

    @Field(() => ServiceStatus, {nullable:true})
    @Validator.IsEnum(ServiceStatus, { message: 'Invalid service status' })
    @Validator.IsOptional()
    status?: keyof typeof ServiceStatus;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Payed off must be a boolean' })
    @Validator.IsOptional()
    payedOff?: boolean;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    @Validator.IsNumber({}, { message: 'Payment amount must be a number' })
    @Validator.Min(0, { message: 'Payment amount cannot be negative' })
    @Validator.Max(9999999.99, { message: 'Payment amount cannot exceed 9999999.99' })
    @Validator.IsOptional()
    paymentAmount?: Decimal;

    @Field(() => Date, {nullable:true})
    @Validator.IsDate({ message: 'Service start date must be a valid date' })
    @Validator.IsOptional()
    serviceStartDate?: Date | string;

    @Field(() => Date, {nullable:true})
    @Validator.IsDate({ message: 'Service end date must be a valid date' })
    @Validator.IsOptional()
    serviceEndDate?: Date | string;

    @HideField()
    addedAt?: Date | string;

    @HideField()
    addedBy?: bigint | number;

    @HideField()
    resolvedAt?: Date | string;

    @HideField()
    resolvedBy?: bigint | number;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    updatedBy?: bigint | number;

    @HideField()
    deletedAt?: Date | string;

    @HideField()
    serviceRequest?: ServiceRequestUpdateOneWithoutApprovedServiceNestedInput;

    @HideField()
    customer?: CustomerUpdateOneRequiredWithoutServicesNestedInput;

    @HideField()
    employee?: EmployeeUpdateOneRequiredWithoutServicesNestedInput;

    @Field(() => VehicleUpdateOneRequiredWithoutServicesNestedInput, {nullable:true})
    @Type(() => VehicleUpdateOneRequiredWithoutServicesNestedInput)
    @ValidateNested()
    @Type(() => VehicleUpdateOneRequiredWithoutServicesNestedInput)
    vehicle?: VehicleUpdateOneRequiredWithoutServicesNestedInput;

    @HideField()
    workshop?: WorkshopUpdateOneRequiredWithoutServicesNestedInput;
}
