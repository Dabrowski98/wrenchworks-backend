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
import { ServiceRequestCreateNestedOneWithoutApprovedServiceInput } from '../../service-request/dto/service-request-create-nested-one-without-approved-service.input';
import { TaskCreateNestedManyWithoutServiceInput } from '../../task/dto/task-create-nested-many-without-service.input';
import { CustomerCreateNestedOneWithoutServicesInput } from '../../customer/dto/customer-create-nested-one-without-services.input';
import { EmployeeCreateNestedOneWithoutServicesInput } from '../../employee/dto/employee-create-nested-one-without-services.input';
import { WorkshopCreateNestedOneWithoutServicesInput } from '../../workshop/dto/workshop-create-nested-one-without-services.input';

@InputType()
export class ServiceCreateWithoutVehicleInput {

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

    @HideField()
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

    @Field(() => WorkshopCreateNestedOneWithoutServicesInput, {nullable:false})
    @Type(() => WorkshopCreateNestedOneWithoutServicesInput)
    workshop!: WorkshopCreateNestedOneWithoutServicesInput;
}
