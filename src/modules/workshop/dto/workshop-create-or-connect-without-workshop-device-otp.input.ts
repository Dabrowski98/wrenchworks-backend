import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { Type } from 'class-transformer';
import { WorkshopCreateWithoutWorkshopDeviceOtpInput } from './workshop-create-without-workshop-device-otp.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class WorkshopCreateOrConnectWithoutWorkshopDeviceOtpInput {

    @Field(() => WorkshopWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId' | 'addressId' | 'email'>;

    @Field(() => WorkshopCreateWithoutWorkshopDeviceOtpInput, {nullable:false})
    @Type(() => WorkshopCreateWithoutWorkshopDeviceOtpInput)
    @ValidateNested()
    create!: WorkshopCreateWithoutWorkshopDeviceOtpInput;
}
