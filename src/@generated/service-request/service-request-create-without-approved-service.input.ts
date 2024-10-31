import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { ServiceRequestsStatus } from '../prisma/service-requests-status.enum';
import { ServiceRequestJobCreateNestedManyWithoutServiceRequestInput } from '../service-request-job/service-request-job-create-nested-many-without-service-request.input';
import { VehicleCreateNestedOneWithoutVehicleAssociatedServiceRequestsInput } from '../vehicle/vehicle-create-nested-one-without-vehicle-associated-service-requests.input';
import { Type } from 'class-transformer';
import { WorkshopCreateNestedOneWithoutServiceRequestsInput } from '../workshop/workshop-create-nested-one-without-service-requests.input';
import { PersonCreateNestedOneWithoutServiceRequestsInput } from '../person/person-create-nested-one-without-service-requests.input';

@InputType()
export class ServiceRequestCreateWithoutApprovedServiceInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    serviceRequestId?: bigint | number;

    @Field(() => Date, {nullable:true})
    requestedAt?: Date | string;

    @Field(() => ServiceRequestsStatus, {nullable:true})
    status?: keyof typeof ServiceRequestsStatus;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => ServiceRequestJobCreateNestedManyWithoutServiceRequestInput, {nullable:true})
    serviceRequestJobs?: ServiceRequestJobCreateNestedManyWithoutServiceRequestInput;

    @Field(() => VehicleCreateNestedOneWithoutVehicleAssociatedServiceRequestsInput, {nullable:false})
    @Type(() => VehicleCreateNestedOneWithoutVehicleAssociatedServiceRequestsInput)
    vehicle!: VehicleCreateNestedOneWithoutVehicleAssociatedServiceRequestsInput;

    @Field(() => WorkshopCreateNestedOneWithoutServiceRequestsInput, {nullable:false})
    @Type(() => WorkshopCreateNestedOneWithoutServiceRequestsInput)
    workshop!: WorkshopCreateNestedOneWithoutServiceRequestsInput;

    @Field(() => PersonCreateNestedOneWithoutServiceRequestsInput, {nullable:false})
    @Type(() => PersonCreateNestedOneWithoutServiceRequestsInput)
    person!: PersonCreateNestedOneWithoutServiceRequestsInput;
}
