import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ServiceRequestsStatus } from '../../prisma/dto/service-requests-status.enum';
import { JobCreateNestedManyWithoutServiceRequestsInput } from '../../job/dto/job-create-nested-many-without-service-requests.input';
import { Type } from 'class-transformer';
import { ServiceCreateNestedOneWithoutServiceRequestInput } from '../../service/dto/service-create-nested-one-without-service-request.input';
import { VehicleCreateNestedOneWithoutVehicleAssociatedServiceRequestsInput } from '../../vehicle/dto/vehicle-create-nested-one-without-vehicle-associated-service-requests.input';
import { PersonCreateNestedOneWithoutServiceRequestsInput } from '../../person/dto/person-create-nested-one-without-service-requests.input';

@InputType()
export class ServiceRequestCreateWithoutWorkshopInput {

    @HideField()
    serviceRequestId?: bigint | number;

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

    @Field(() => PersonCreateNestedOneWithoutServiceRequestsInput, {nullable:false})
    @Type(() => PersonCreateNestedOneWithoutServiceRequestsInput)
    person!: PersonCreateNestedOneWithoutServiceRequestsInput;
}
