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
import { CustomerUpdateOneRequiredWithoutServicesNestedInput } from '../../customer/dto/customer-update-one-required-without-services-nested.input';
import { EmployeeUpdateOneRequiredWithoutServicesNestedInput } from '../../employee/dto/employee-update-one-required-without-services-nested.input';
import { VehicleUpdateOneRequiredWithoutServicesNestedInput } from '../../vehicle/dto/vehicle-update-one-required-without-services-nested.input';
import { WorkshopUpdateOneRequiredWithoutServicesNestedInput } from '../../workshop/dto/workshop-update-one-required-without-services-nested.input';
import { CustomerCustomerIdWorkshopIdCompoundUniqueInput } from 'src/modules/customer';
import { EmployeeEmployeeIdWorkshopIdCompoundUniqueInput } from 'src/modules/employee';

@InputType()
export class ServiceUpdateInput {

    @Field(() => EmployeeEmployeeIdWorkshopIdCompoundUniqueInput, {nullable:false})
    @Type(() => EmployeeEmployeeIdWorkshopIdCompoundUniqueInput)
    employeeId_workshopId!: EmployeeEmployeeIdWorkshopIdCompoundUniqueInput;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Description must be a string' })
    @Validator.Length(0, 5000, { message: 'Description cannot exceed 5000 characters' })
    @Validator.IsOptional()
    description?: string;

    @Field(() => ServicesStatus, {nullable:true})
    @Validator.IsOptional()
    @Validator.IsEnum(ServicesStatus, { message: 'Invalid service status' })
    status?: keyof typeof ServicesStatus;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsOptional()
    @Validator.IsBoolean({ message: 'Payed off must be a boolean' })
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
}
