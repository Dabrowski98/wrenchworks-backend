import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { ServiceRequestsStatus } from '../../prisma/dto/service-requests-status.enum';
import { JobUncheckedCreateNestedManyWithoutServiceRequestsInput } from '../../job/dto/job-unchecked-create-nested-many-without-service-requests.input';
import { Type } from 'class-transformer';

@InputType()
export class ServiceRequestUncheckedCreateWithoutWorkshopInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    serviceRequestId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    vehicleId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    personId!: bigint | number;

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

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    approvedServiceId?: bigint | number;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => JobUncheckedCreateNestedManyWithoutServiceRequestsInput, {nullable:true})
    @Type(() => JobUncheckedCreateNestedManyWithoutServiceRequestsInput)
    jobs?: JobUncheckedCreateNestedManyWithoutServiceRequestsInput;
}