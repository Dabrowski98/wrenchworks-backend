import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ServiceRequestsStatus } from '../../prisma/dto/service-requests-status.enum';
import { JobUpdateManyWithoutServiceRequestsNestedInput } from '../../job/dto/job-update-many-without-service-requests-nested.input';
import { Type } from 'class-transformer';
import { ServiceUpdateOneWithoutServiceRequestNestedInput } from '../../service/dto/service-update-one-without-service-request-nested.input';
import { VehicleUpdateOneRequiredWithoutVehicleAssociatedServiceRequestsNestedInput } from '../../vehicle/dto/vehicle-update-one-required-without-vehicle-associated-service-requests-nested.input';
import { WorkshopUpdateOneRequiredWithoutServiceRequestsNestedInput } from '../../workshop/dto/workshop-update-one-required-without-service-requests-nested.input';
import { PersonUpdateOneRequiredWithoutServiceRequestsNestedInput } from '../../person/dto/person-update-one-required-without-service-requests-nested.input';
import { GraphQLBigInt } from 'graphql-scalars';

@InputType()
export class ServiceRequestUpdateInput {

    @Field(() => ServiceRequestsStatus, {nullable:true})
    @Validator.IsOptional()
    @Validator.IsEnum(ServiceRequestsStatus, { message: 'Invalid service request status' })
    status?: keyof typeof ServiceRequestsStatus;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Description must be a string' })
    @Validator.Length(0, 5000, { message: 'Description cannot exceed 5000 characters' })
    @Validator.IsOptional()
    description?: string;

    @Field(() => [GraphQLBigInt], {nullable:true})
    @Validator.IsOptional()
    @Validator.IsArray({ message: 'Jobs ids must be an array' })
    @Validator.ArrayNotEmpty({ message: 'Jobs ids must not be empty' })
    jobsIds?: bigint[];

    @Field(() => GraphQLBigInt, {nullable:true})
    @Validator.IsOptional()
    vehicleId?: bigint | number;
}
