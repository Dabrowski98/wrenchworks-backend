import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { ServiceRequestsStatus } from '../prisma/service-requests-status.enum';
import { ServiceCreateNestedOneWithoutServiceRequestInput } from '../service/service-create-nested-one-without-service-request.input';
import { Type } from 'class-transformer';
import { VehicleCreateNestedOneWithoutVehicleAssociatedServiceRequestsInput } from '../vehicle/vehicle-create-nested-one-without-vehicle-associated-service-requests.input';
import { WorkshopCreateNestedOneWithoutServiceRequestsInput } from '../workshop/workshop-create-nested-one-without-service-requests.input';
import { PersonCreateNestedOneWithoutServiceRequestsInput } from '../person/person-create-nested-one-without-service-requests.input';

@InputType()
export class ServiceRequestCreateWithoutJobsInput {

    @HideField()
    serviceRequestId?: bigint | number;

    @Field(() => Date, {nullable:true})
    requestedAt?: Date | string;

    @Field(() => ServiceRequestsStatus, {nullable:true})
    status?: keyof typeof ServiceRequestsStatus;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => ServiceCreateNestedOneWithoutServiceRequestInput, {nullable:true})
    @Type(() => ServiceCreateNestedOneWithoutServiceRequestInput)
    approvedService?: ServiceCreateNestedOneWithoutServiceRequestInput;

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
