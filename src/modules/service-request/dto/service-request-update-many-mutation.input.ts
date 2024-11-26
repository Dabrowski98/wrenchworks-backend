import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { ServiceRequestStatus } from '../../prisma/dto/service-request-status.enum';
import * as Validator from 'class-validator';

@InputType()
export class ServiceRequestUpdateManyMutationInput {

    @HideField()
    serviceRequestId?: bigint | number;

    @Field(() => ServiceRequestStatus, {nullable:true})
    @Validator.IsEnum(ServiceRequestsStatus, { message: 'Invalid service request status' })
    @Validator.IsOptional()
    status?: keyof typeof ServiceRequestStatus;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Description must be a string' })
    @Validator.Length(0, 5000, { message: 'Description cannot exceed 5000 characters' })
    @Validator.IsOptional()
    description?: string;

    @Field(() => Date, {nullable:true})
    @HideField()
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    @HideField()
    resolvedAt?: Date | string;

    @Field(() => String, {nullable:true})
    @HideField()
    resolvedBy?: bigint | number;

    @Field(() => Date, {nullable:true})
    @HideField()
    deletedAt?: Date | string;
}
