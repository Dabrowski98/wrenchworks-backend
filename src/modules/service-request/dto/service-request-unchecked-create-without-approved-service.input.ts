import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { ServiceRequestStatus } from '../../prisma/dto/service-request-status.enum';
import { HideField } from '@nestjs/graphql';
import { JobUncheckedCreateNestedManyWithoutServiceRequestsInput } from '../../job/dto/job-unchecked-create-nested-many-without-service-requests.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class ServiceRequestUncheckedCreateWithoutApprovedServiceInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    serviceRequestId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    vehicleId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    @Validator.IsOptional()
    userId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    @Validator.IsOptional()
    guestId?: bigint | number;

    @Field(() => ServiceRequestStatus, {nullable:true})
    @Validator.IsEnum(ServiceRequestStatus, { message: 'Invalid service request status' })
    @Validator.IsOptional()
    status?: keyof typeof ServiceRequestStatus;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Description must be a string' })
    @Validator.Length(0, 5000, { message: 'Description cannot exceed 5000 characters' })
    @Validator.IsOptional()
    description?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    resolvedAt?: Date | string;

    @HideField()
    resolvedBy?: bigint | number;

    @HideField()
    deletedAt?: Date | string;

    @Field(() => JobUncheckedCreateNestedManyWithoutServiceRequestsInput, {nullable:true})
    @Type(() => JobUncheckedCreateNestedManyWithoutServiceRequestsInput)
    @ValidateNested()
    @Type(() => JobUncheckedCreateNestedManyWithoutServiceRequestsInput)
    jobs?: JobUncheckedCreateNestedManyWithoutServiceRequestsInput;
}
