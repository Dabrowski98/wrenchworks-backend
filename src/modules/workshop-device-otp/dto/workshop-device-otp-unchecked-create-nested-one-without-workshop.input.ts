import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopDeviceOtpCreateWithoutWorkshopInput } from './workshop-device-otp-create-without-workshop.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopDeviceOtpCreateOrConnectWithoutWorkshopInput } from './workshop-device-otp-create-or-connect-without-workshop.input';
import { Prisma } from '@prisma/client';
import { WorkshopDeviceOtpWhereUniqueInput } from './workshop-device-otp-where-unique.input';

@InputType()
export class WorkshopDeviceOtpUncheckedCreateNestedOneWithoutWorkshopInput {

    @Field(() => WorkshopDeviceOtpCreateWithoutWorkshopInput, {nullable:true})
    @Type(() => WorkshopDeviceOtpCreateWithoutWorkshopInput)
    @ValidateNested()
    create?: WorkshopDeviceOtpCreateWithoutWorkshopInput;

    @Field(() => WorkshopDeviceOtpCreateOrConnectWithoutWorkshopInput, {nullable:true})
    @Type(() => WorkshopDeviceOtpCreateOrConnectWithoutWorkshopInput)
    @ValidateNested()
    connectOrCreate?: WorkshopDeviceOtpCreateOrConnectWithoutWorkshopInput;

    @Field(() => WorkshopDeviceOtpWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopDeviceOtpWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<WorkshopDeviceOtpWhereUniqueInput, 'WorkshopDeviceOtpId' | 'workshopId' | 'code'>;
}
