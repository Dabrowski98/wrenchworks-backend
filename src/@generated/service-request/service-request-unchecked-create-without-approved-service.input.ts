import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { ServiceRequestsStatus } from '../prisma/service-requests-status.enum';
import { ServiceRequestJobUncheckedCreateNestedManyWithoutServiceRequestInput } from '../service-request-job/service-request-job-unchecked-create-nested-many-without-service-request.input';

@InputType()
export class ServiceRequestUncheckedCreateWithoutApprovedServiceInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    serviceRequestId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    vehicleId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    personId!: bigint | number;

    @Field(() => Date, {nullable:true})
    requestedAt?: Date | string;

    @Field(() => ServiceRequestsStatus, {nullable:true})
    status?: keyof typeof ServiceRequestsStatus;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => ServiceRequestJobUncheckedCreateNestedManyWithoutServiceRequestInput, {nullable:true})
    serviceRequestJobs?: ServiceRequestJobUncheckedCreateNestedManyWithoutServiceRequestInput;
}
