import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { ServiceRequestStatus } from '../../prisma/dto/service-request-status.enum';
import * as Validator from 'class-validator';
import { JobUpdateManyWithoutServiceRequestsNestedInput } from '../../job/dto/job-update-many-without-service-requests-nested.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ServiceUpdateOneWithoutServiceRequestNestedInput } from '../../service/dto/service-update-one-without-service-request-nested.input';
import { WorkshopUpdateOneRequiredWithoutServiceRequestsNestedInput } from '../../workshop/dto/workshop-update-one-required-without-service-requests-nested.input';
import { UserUpdateOneWithoutServiceRequestsNestedInput } from '../../user/dto/user-update-one-without-service-requests-nested.input';
import { GuestUpdateOneWithoutServiceRequestNestedInput } from '../../guest/dto/guest-update-one-without-service-request-nested.input';

@InputType()
export class ServiceRequestUpdateWithoutVehicleInput {

    @HideField()
    serviceRequestId?: bigint | number;

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

    @Field(() => JobUpdateManyWithoutServiceRequestsNestedInput, {nullable:true})
    @Type(() => JobUpdateManyWithoutServiceRequestsNestedInput)
    @ValidateNested()
    @Type(() => JobUpdateManyWithoutServiceRequestsNestedInput)
    jobs?: JobUpdateManyWithoutServiceRequestsNestedInput;

    @HideField()
    approvedService?: ServiceUpdateOneWithoutServiceRequestNestedInput;

    @HideField()
    workshop?: WorkshopUpdateOneRequiredWithoutServiceRequestsNestedInput;

    @HideField()
    user?: UserUpdateOneWithoutServiceRequestsNestedInput;

    @HideField()
    guest?: GuestUpdateOneWithoutServiceRequestNestedInput;
}
