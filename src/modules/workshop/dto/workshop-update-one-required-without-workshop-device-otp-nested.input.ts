import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutWorkshopDeviceOtpInput } from './workshop-create-without-workshop-device-otp.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopCreateOrConnectWithoutWorkshopDeviceOtpInput } from './workshop-create-or-connect-without-workshop-device-otp.input';
import { WorkshopUpsertWithoutWorkshopDeviceOtpInput } from './workshop-upsert-without-workshop-device-otp.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { WorkshopUpdateToOneWithWhereWithoutWorkshopDeviceOtpInput } from './workshop-update-to-one-with-where-without-workshop-device-otp.input';

@InputType()
export class WorkshopUpdateOneRequiredWithoutWorkshopDeviceOtpNestedInput {

    @Field(() => WorkshopCreateWithoutWorkshopDeviceOtpInput, {nullable:true})
    @Type(() => WorkshopCreateWithoutWorkshopDeviceOtpInput)
    @ValidateNested()
    create?: WorkshopCreateWithoutWorkshopDeviceOtpInput;

    @Field(() => WorkshopCreateOrConnectWithoutWorkshopDeviceOtpInput, {nullable:true})
    @Type(() => WorkshopCreateOrConnectWithoutWorkshopDeviceOtpInput)
    @ValidateNested()
    connectOrCreate?: WorkshopCreateOrConnectWithoutWorkshopDeviceOtpInput;

    @Field(() => WorkshopUpsertWithoutWorkshopDeviceOtpInput, {nullable:true})
    @Type(() => WorkshopUpsertWithoutWorkshopDeviceOtpInput)
    @ValidateNested()
    upsert?: WorkshopUpsertWithoutWorkshopDeviceOtpInput;

    @Field(() => WorkshopWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId' | 'addressId' | 'email'>;

    @Field(() => WorkshopUpdateToOneWithWhereWithoutWorkshopDeviceOtpInput, {nullable:true})
    @Type(() => WorkshopUpdateToOneWithWhereWithoutWorkshopDeviceOtpInput)
    @ValidateNested()
    update?: WorkshopUpdateToOneWithWhereWithoutWorkshopDeviceOtpInput;
}
