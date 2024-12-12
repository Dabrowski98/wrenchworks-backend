import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopDeviceOTPCreateWithoutWorkshopInput } from './workshop-device-otp-create-without-workshop.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopDeviceOTPCreateOrConnectWithoutWorkshopInput } from './workshop-device-otp-create-or-connect-without-workshop.input';
import { WorkshopDeviceOTPUpsertWithoutWorkshopInput } from './workshop-device-otp-upsert-without-workshop.input';
import { WorkshopDeviceOTPWhereInput } from './workshop-device-otp-where.input';
import { Prisma } from '@prisma/client';
import { WorkshopDeviceOTPWhereUniqueInput } from './workshop-device-otp-where-unique.input';
import { WorkshopDeviceOTPUpdateToOneWithWhereWithoutWorkshopInput } from './workshop-device-otp-update-to-one-with-where-without-workshop.input';

@InputType()
export class WorkshopDeviceOTPUncheckedUpdateOneWithoutWorkshopNestedInput {

    @Field(() => WorkshopDeviceOTPCreateWithoutWorkshopInput, {nullable:true})
    @Type(() => WorkshopDeviceOTPCreateWithoutWorkshopInput)
    @ValidateNested()
    create?: WorkshopDeviceOTPCreateWithoutWorkshopInput;

    @Field(() => WorkshopDeviceOTPCreateOrConnectWithoutWorkshopInput, {nullable:true})
    @Type(() => WorkshopDeviceOTPCreateOrConnectWithoutWorkshopInput)
    @ValidateNested()
    connectOrCreate?: WorkshopDeviceOTPCreateOrConnectWithoutWorkshopInput;

    @Field(() => WorkshopDeviceOTPUpsertWithoutWorkshopInput, {nullable:true})
    @Type(() => WorkshopDeviceOTPUpsertWithoutWorkshopInput)
    @ValidateNested()
    upsert?: WorkshopDeviceOTPUpsertWithoutWorkshopInput;

    @Field(() => WorkshopDeviceOTPWhereInput, {nullable:true})
    @Type(() => WorkshopDeviceOTPWhereInput)
    @ValidateNested()
    disconnect?: WorkshopDeviceOTPWhereInput;

    @Field(() => WorkshopDeviceOTPWhereInput, {nullable:true})
    @Type(() => WorkshopDeviceOTPWhereInput)
    @ValidateNested()
    delete?: WorkshopDeviceOTPWhereInput;

    @Field(() => WorkshopDeviceOTPWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopDeviceOTPWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<WorkshopDeviceOTPWhereUniqueInput, 'workshopDeviceOTPId' | 'workshopId' | 'code'>;

    @Field(() => WorkshopDeviceOTPUpdateToOneWithWhereWithoutWorkshopInput, {nullable:true})
    @Type(() => WorkshopDeviceOTPUpdateToOneWithWhereWithoutWorkshopInput)
    @ValidateNested()
    update?: WorkshopDeviceOTPUpdateToOneWithWhereWithoutWorkshopInput;
}
