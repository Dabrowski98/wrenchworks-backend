import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { ServiceRequestsStatus } from '../prisma/service-requests-status.enum';
import { JobCreateNestedManyWithoutServiceRequestsInput } from '../job/job-create-nested-many-without-service-requests.input';
import { Type } from 'class-transformer';
import { ServiceCreateNestedOneWithoutServiceRequestInput } from '../service/service-create-nested-one-without-service-request.input';
import { VehicleCreateNestedOneWithoutVehicleAssociatedServiceRequestsInput } from '../vehicle/vehicle-create-nested-one-without-vehicle-associated-service-requests.input';
import { WorkshopCreateNestedOneWithoutServiceRequestsInput } from '../workshop/workshop-create-nested-one-without-service-requests.input';

@InputType()
export class ServiceRequestCreateWithoutPersonInput {

    @HideField()
    serviceRequestId?: bigint | number;

    @Field(() => Date, {nullable:true})
    requestedAt?: Date | string;

    @Field(() => ServiceRequestsStatus, {nullable:true})
    status?: keyof typeof ServiceRequestsStatus;

    @Field(() => String, {nullable:true})
    description?: string;

    @HideField()
    deletedAt?: Date | string;

    @Field(() => JobCreateNestedManyWithoutServiceRequestsInput, {nullable:true})
    @Type(() => JobCreateNestedManyWithoutServiceRequestsInput)
    jobs?: JobCreateNestedManyWithoutServiceRequestsInput;

    @Field(() => ServiceCreateNestedOneWithoutServiceRequestInput, {nullable:true})
    @Type(() => ServiceCreateNestedOneWithoutServiceRequestInput)
    approvedService?: ServiceCreateNestedOneWithoutServiceRequestInput;

    @Field(() => VehicleCreateNestedOneWithoutVehicleAssociatedServiceRequestsInput, {nullable:false})
    @Type(() => VehicleCreateNestedOneWithoutVehicleAssociatedServiceRequestsInput)
    vehicle!: VehicleCreateNestedOneWithoutVehicleAssociatedServiceRequestsInput;

    @Field(() => WorkshopCreateNestedOneWithoutServiceRequestsInput, {nullable:false})
    @Type(() => WorkshopCreateNestedOneWithoutServiceRequestsInput)
    workshop!: WorkshopCreateNestedOneWithoutServiceRequestsInput;
}
