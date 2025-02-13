import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { WorkshopDeviceStatus } from '../../prisma/dto/workshop-device-status.enum';
import * as Scalars from 'graphql-scalars';
import { CREATE, UPDATE } from 'src/common/constants/validation-groups';


@InputType()
export class WorkshopDeviceCreateManyWorkshopInput {

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'Serial number must be a string' })
    @Validator.Length(1, 255, { message: 'Serial number must be between 1 and 255 characters' })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'Serial number is required' })
    serialNumber!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'Device name must be a string' })
    @Validator.Length(1, 255, { message: 'Device name must be between 1 and 255 characters' })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'Device name is required' })
    @Validator.IsOptional({ groups: [UPDATE]})
    deviceName!: string;

    @Field(() => WorkshopDeviceStatus, {nullable:true})
    @Validator.IsEnum(WorkshopDeviceStatus, { message: 'Invalid workshop device status' })
    @Validator.IsOptional()
    status?: keyof typeof WorkshopDeviceStatus;

    @Field(() => Date, {nullable:true})
    lastLoginAt?: Date | string;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    lastLoginBy?: bigint | number;

    @Field(() => Date, {nullable:true})
    acceptedAt?: Date | string;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    acceptedBy?: bigint | number;
}