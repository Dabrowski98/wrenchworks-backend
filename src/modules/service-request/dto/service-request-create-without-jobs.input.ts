import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { ServiceRequestStatus } from '../../prisma/dto/service-request-status.enum';
import * as Validator from 'class-validator';
import { ServiceCreateNestedOneWithoutServiceRequestInput } from '../../service/dto/service-create-nested-one-without-service-request.input';
import { VehicleCreateNestedOneWithoutServiceRequestsInput } from '../../vehicle/dto/vehicle-create-nested-one-without-service-requests.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopCreateNestedOneWithoutServiceRequestsInput } from '../../workshop/dto/workshop-create-nested-one-without-service-requests.input';
import { UserCreateNestedOneWithoutServiceRequestsInput } from '../../user/dto/user-create-nested-one-without-service-requests.input';
import { GuestCreateNestedOneWithoutServiceRequestInput } from '../../guest/dto/guest-create-nested-one-without-service-request.input';

@InputType()
export class ServiceRequestCreateWithoutJobsInput {

    @HideField()
    serviceRequestId?: bigint | number;

    @HideField()
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

    @HideField()
    approvedService?: ServiceCreateNestedOneWithoutServiceRequestInput;

    @Field(() => VehicleCreateNestedOneWithoutServiceRequestsInput, {nullable:false})
    @Type(() => VehicleCreateNestedOneWithoutServiceRequestsInput)
    @ValidateNested()
    @Type(() => VehicleCreateNestedOneWithoutServiceRequestsInput)
    vehicle!: VehicleCreateNestedOneWithoutServiceRequestsInput;

    @Field(() => WorkshopCreateNestedOneWithoutServiceRequestsInput, {nullable:false})
    @Type(() => WorkshopCreateNestedOneWithoutServiceRequestsInput)
    @ValidateNested()
    @Type(() => WorkshopCreateNestedOneWithoutServiceRequestsInput)
    workshop!: WorkshopCreateNestedOneWithoutServiceRequestsInput;

    @Field(() => UserCreateNestedOneWithoutServiceRequestsInput, {nullable:true})
    @Type(() => UserCreateNestedOneWithoutServiceRequestsInput)
    user?: UserCreateNestedOneWithoutServiceRequestsInput;

    @HideField()
    guest?: GuestCreateNestedOneWithoutServiceRequestInput;
}
