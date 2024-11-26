import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { ServiceRequestStatus } from '../../prisma/dto/service-request-status.enum';
import * as Validator from 'class-validator';
import { JobUpdateManyWithoutServiceRequestsNestedInput } from '../../job/dto/job-update-many-without-service-requests-nested.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ServiceUpdateOneWithoutServiceRequestNestedInput } from '../../service/dto/service-update-one-without-service-request-nested.input';
import { VehicleUpdateOneRequiredWithoutServiceRequestsNestedInput } from '../../vehicle/dto/vehicle-update-one-required-without-service-requests-nested.input';
import { UserUpdateOneWithoutServiceRequestsNestedInput } from '../../user/dto/user-update-one-without-service-requests-nested.input';
import { GuestUpdateOneWithoutServiceRequestNestedInput } from '../../guest/dto/guest-update-one-without-service-request-nested.input';

@InputType()
export class ServiceRequestUpdateWithoutWorkshopInput {

    @HideField()
    serviceRequestId?: bigint | number;

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

    @Field(() => JobUpdateManyWithoutServiceRequestsNestedInput, {nullable:true})
    @Type(() => JobUpdateManyWithoutServiceRequestsNestedInput)
    @ValidateNested()
    @Type(() => JobUpdateManyWithoutServiceRequestsNestedInput)
    jobs?: JobUpdateManyWithoutServiceRequestsNestedInput;

    @HideField()
    approvedService?: ServiceUpdateOneWithoutServiceRequestNestedInput;

    @Field(() => VehicleUpdateOneRequiredWithoutServiceRequestsNestedInput, {nullable:true})
    @Type(() => VehicleUpdateOneRequiredWithoutServiceRequestsNestedInput)
    @ValidateNested()
    @Type(() => VehicleUpdateOneRequiredWithoutServiceRequestsNestedInput)
    vehicle?: VehicleUpdateOneRequiredWithoutServiceRequestsNestedInput;

    @HideField()
    user?: UserUpdateOneWithoutServiceRequestsNestedInput;

    @HideField()
    guest?: GuestUpdateOneWithoutServiceRequestNestedInput;
}
