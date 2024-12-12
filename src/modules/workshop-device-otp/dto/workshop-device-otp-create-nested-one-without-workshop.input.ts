import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopDeviceOTPCreateWithoutWorkshopInput } from './workshop-device-otp-create-without-workshop.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopDeviceOTPCreateOrConnectWithoutWorkshopInput } from './workshop-device-otp-create-or-connect-without-workshop.input';
import { Prisma } from '@prisma/client';
import { WorkshopDeviceOTPWhereUniqueInput } from './workshop-device-otp-where-unique.input';

@InputType()
export class WorkshopDeviceOTPCreateNestedOneWithoutWorkshopInput {

    @Field(() => WorkshopDeviceOTPCreateWithoutWorkshopInput, {nullable:true})
    @Type(() => WorkshopDeviceOTPCreateWithoutWorkshopInput)
    @ValidateNested()
    create?: WorkshopDeviceOTPCreateWithoutWorkshopInput;

    @Field(() => WorkshopDeviceOTPCreateOrConnectWithoutWorkshopInput, {nullable:true})
    @Type(() => WorkshopDeviceOTPCreateOrConnectWithoutWorkshopInput)
    @ValidateNested()
    connectOrCreate?: WorkshopDeviceOTPCreateOrConnectWithoutWorkshopInput;

    @Field(() => WorkshopDeviceOTPWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopDeviceOTPWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<WorkshopDeviceOTPWhereUniqueInput, 'workshopDeviceOTPId' | 'workshopId' | 'code'>;
}
