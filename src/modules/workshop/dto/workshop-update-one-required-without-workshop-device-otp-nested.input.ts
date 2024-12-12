import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutWorkshopDeviceOTPInput } from './workshop-create-without-workshop-device-otp.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopCreateOrConnectWithoutWorkshopDeviceOTPInput } from './workshop-create-or-connect-without-workshop-device-otp.input';
import { WorkshopUpsertWithoutWorkshopDeviceOTPInput } from './workshop-upsert-without-workshop-device-otp.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { WorkshopUpdateToOneWithWhereWithoutWorkshopDeviceOTPInput } from './workshop-update-to-one-with-where-without-workshop-device-otp.input';

@InputType()
export class WorkshopUpdateOneRequiredWithoutWorkshopDeviceOTPNestedInput {

    @Field(() => WorkshopCreateWithoutWorkshopDeviceOTPInput, {nullable:true})
    @Type(() => WorkshopCreateWithoutWorkshopDeviceOTPInput)
    @ValidateNested()
    create?: WorkshopCreateWithoutWorkshopDeviceOTPInput;

    @Field(() => WorkshopCreateOrConnectWithoutWorkshopDeviceOTPInput, {nullable:true})
    @Type(() => WorkshopCreateOrConnectWithoutWorkshopDeviceOTPInput)
    @ValidateNested()
    connectOrCreate?: WorkshopCreateOrConnectWithoutWorkshopDeviceOTPInput;

    @Field(() => WorkshopUpsertWithoutWorkshopDeviceOTPInput, {nullable:true})
    @Type(() => WorkshopUpsertWithoutWorkshopDeviceOTPInput)
    @ValidateNested()
    upsert?: WorkshopUpsertWithoutWorkshopDeviceOTPInput;

    @Field(() => WorkshopWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId' | 'addressId' | 'email'>;

    @Field(() => WorkshopUpdateToOneWithWhereWithoutWorkshopDeviceOTPInput, {nullable:true})
    @Type(() => WorkshopUpdateToOneWithWhereWithoutWorkshopDeviceOTPInput)
    @ValidateNested()
    update?: WorkshopUpdateToOneWithWhereWithoutWorkshopDeviceOTPInput;
}
