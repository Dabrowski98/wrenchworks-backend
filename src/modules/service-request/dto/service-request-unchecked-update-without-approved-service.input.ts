import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { ServiceRequestsStatus } from '../../prisma/dto/service-requests-status.enum';
import { JobUncheckedUpdateManyWithoutServiceRequestsNestedInput } from '../../job/dto/job-unchecked-update-many-without-service-requests-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class ServiceRequestUncheckedUpdateWithoutApprovedServiceInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    serviceRequestId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    vehicleId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    personId?: bigint | number;

    @Field(() => Date, {nullable:true})
    @Validator.IsDate({ message: 'Request date must be a valid date' })
    requestedAt?: Date | string;

    @Field(() => ServiceRequestsStatus, {nullable:true})
    @Validator.IsEnum(ServiceRequestsStatus, { message: 'Invalid service request status' })
    status?: keyof typeof ServiceRequestsStatus;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Description must be a string' })
    @Validator.Length(0, 5000, { message: 'Description cannot exceed 5000 characters' })
    @Validator.IsOptional()
    description?: string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => JobUncheckedUpdateManyWithoutServiceRequestsNestedInput, {nullable:true})
    @Type(() => JobUncheckedUpdateManyWithoutServiceRequestsNestedInput)
    jobs?: JobUncheckedUpdateManyWithoutServiceRequestsNestedInput;
}
