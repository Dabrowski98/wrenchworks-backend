import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { ServiceRequestStatus } from '../../prisma/dto/service-request-status.enum';
import { HideField } from 'nestjs-graphql';
import { JobUncheckedUpdateManyWithoutServiceRequestsNestedInput } from '../../job/dto/job-unchecked-update-many-without-service-requests-nested.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class ServiceRequestUncheckedUpdateWithoutUserInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    serviceRequestId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    vehicleId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    @Validator.IsOptional()
    guestId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    @Validator.IsOptional()
    approvedServiceId?: bigint | number;

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

    @Field(() => JobUncheckedUpdateManyWithoutServiceRequestsNestedInput, {nullable:true})
    @Type(() => JobUncheckedUpdateManyWithoutServiceRequestsNestedInput)
    @ValidateNested()
    @Type(() => JobUncheckedUpdateManyWithoutServiceRequestsNestedInput)
    jobs?: JobUncheckedUpdateManyWithoutServiceRequestsNestedInput;
}
