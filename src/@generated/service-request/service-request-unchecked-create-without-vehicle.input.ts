import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { ServiceRequestsStatus } from '../prisma/service-requests-status.enum';
import { JobUncheckedCreateNestedManyWithoutServiceRequestsInput } from '../job/job-unchecked-create-nested-many-without-service-requests.input';
import { Type } from 'class-transformer';

@InputType()
export class ServiceRequestUncheckedCreateWithoutVehicleInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    serviceRequestId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    personId!: bigint | number;

    @Field(() => Date, {nullable:true})
    requestedAt?: Date | string;

    @Field(() => ServiceRequestsStatus, {nullable:true})
    status?: keyof typeof ServiceRequestsStatus;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    approvedServiceId?: bigint | number;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => JobUncheckedCreateNestedManyWithoutServiceRequestsInput, {nullable:true})
    @Type(() => JobUncheckedCreateNestedManyWithoutServiceRequestsInput)
    jobs?: JobUncheckedCreateNestedManyWithoutServiceRequestsInput;
}
