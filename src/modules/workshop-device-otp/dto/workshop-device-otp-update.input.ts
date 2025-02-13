import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { WorkshopUpdateOneRequiredWithoutWorkshopDeviceOtpNestedInput } from '../../workshop/dto/workshop-update-one-required-without-workshop-device-otp-nested.input';

@InputType()
export class WorkshopDeviceOtpUpdateInput {

    @HideField()
    WorkshopDeviceOtpId?: bigint | number;

    @HideField()
    employeeId?: bigint | number;

    @HideField()
    code?: string;

    @HideField()
    expiresAt?: Date | string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    workshop?: WorkshopUpdateOneRequiredWithoutWorkshopDeviceOtpNestedInput;
}
