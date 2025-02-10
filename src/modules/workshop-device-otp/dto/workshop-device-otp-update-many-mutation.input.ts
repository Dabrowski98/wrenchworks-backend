import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class WorkshopDeviceOtpUpdateManyMutationInput {

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
}
