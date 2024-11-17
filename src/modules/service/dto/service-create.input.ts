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
import { VehicleCreateNestedOneWithoutServicesInput } from '../../vehicle/dto/vehicle-create-nested-one-without-services.input';
import { WorkshopCreateNestedOneWithoutServicesInput } from '../../workshop/dto/workshop-create-nested-one-without-services.input';
import { EmployeeEmployeeIdWorkshopIdCompoundUniqueInput } from 'src/modules/employee';
import { CustomerCustomerIdWorkshopIdCompoundUniqueInput } from 'src/modules/customer';
import { TaskCreateManyServiceInputEnvelope } from 'src/modules/task';

@InputType()
export class ServiceCreateInput {


    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Description must be a string' })
    @Validator.Length(0, 5000, { message: 'Description cannot exceed 5000 characters' })
    @Validator.IsOptional()
    description?: string;

    @Field(() => Date, {nullable:true})
    @Validator.IsDate({ message: 'Service start date must be a valid date' })
    serviceStartDate?: Date | string;

    @Field(() => Date, {nullable:true})
    @Validator.IsDate({ message: 'Service end date must be a valid date' })
    @Validator.IsOptional()
    serviceEndDate?: Date | string;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    @Validator.IsOptional()
    serviceRequestId?: bigint | number;

    @Field(() => TaskCreateManyServiceInputEnvelope, {nullable:true})
    @Type(() => TaskCreateManyServiceInputEnvelope)
    @Validator.ValidateNested({ each: true })
    tasks?: TaskCreateManyServiceInputEnvelope;

    @Field(() => CustomerCustomerIdWorkshopIdCompoundUniqueInput, {nullable:false}) 
    @Type(() => CustomerCustomerIdWorkshopIdCompoundUniqueInput)
    @Validator.ValidateNested({ each: true })
    customerId_workshopId!: CustomerCustomerIdWorkshopIdCompoundUniqueInput;

    @Field(() => EmployeeEmployeeIdWorkshopIdCompoundUniqueInput, {nullable:false})
    @Type(() => EmployeeEmployeeIdWorkshopIdCompoundUniqueInput)
    @Validator.ValidateNested({ each: true })
    employeeId_workshopId!: EmployeeEmployeeIdWorkshopIdCompoundUniqueInput;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    @Validator.IsNotEmpty({ message: 'Vehicle ID is required' })
    vehicleId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    @Validator.IsNotEmpty({ message: 'Workshop ID is required' })
    workshopId!: bigint | number;
}
