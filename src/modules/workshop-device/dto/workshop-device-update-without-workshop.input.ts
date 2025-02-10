import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { WorkshopDeviceStatus } from '../../prisma/dto/workshop-device-status.enum';

@InputType()
export class WorkshopDeviceUpdateWithoutWorkshopInput {

    @HideField()
    workshopDeviceId?: bigint | number;

    @HideField()
    serialNumber?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Device name must be a string' })
    @Validator.Length(1, 255, { message: 'Device name must be between 1 and 255 characters' })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'Device name is required' })
    @Validator.IsOptional({ groups: [UPDATE]})
    deviceName?: string;

    @Field(() => WorkshopDeviceStatus, {nullable:true})
    @Validator.IsEnum(WorkshopDeviceStatus, { message: 'Invalid workshop device status' })
    @Validator.IsOptional()
    status?: keyof typeof WorkshopDeviceStatus;

    @Field(() => Date, {nullable:true})
    lastLoginAt?: Date | string;

    @Field(() => String, {nullable:true})
    lastLoginBy?: bigint | number;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    updatedBy?: bigint | number;

    @Field(() => Date, {nullable:true})
    acceptedAt?: Date | string;

    @Field(() => String, {nullable:true})
    acceptedBy?: bigint | number;
}
