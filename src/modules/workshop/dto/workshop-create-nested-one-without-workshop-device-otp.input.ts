import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutWorkshopDeviceOTPInput } from './workshop-create-without-workshop-device-otp.input';
import { HideField } from '@nestjs/graphql';
import { WorkshopCreateOrConnectWithoutWorkshopDeviceOTPInput } from './workshop-create-or-connect-without-workshop-device-otp.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class WorkshopCreateNestedOneWithoutWorkshopDeviceOTPInput {

    @Field(() => WorkshopWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId' | 'addressId' | 'email'>;
}