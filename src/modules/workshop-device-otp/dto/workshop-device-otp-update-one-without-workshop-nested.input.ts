import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopDeviceOtpCreateWithoutWorkshopInput } from './workshop-device-otp-create-without-workshop.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopDeviceOtpCreateOrConnectWithoutWorkshopInput } from './workshop-device-otp-create-or-connect-without-workshop.input';
import { WorkshopDeviceOtpUpsertWithoutWorkshopInput } from './workshop-device-otp-upsert-without-workshop.input';
import { WorkshopDeviceOtpWhereInput } from './workshop-device-otp-where.input';
import { Prisma } from '@prisma/client';
import { WorkshopDeviceOtpWhereUniqueInput } from './workshop-device-otp-where-unique.input';
import { WorkshopDeviceOtpUpdateToOneWithWhereWithoutWorkshopInput } from './workshop-device-otp-update-to-one-with-where-without-workshop.input';

@InputType()
export class WorkshopDeviceOtpUpdateOneWithoutWorkshopNestedInput {

    @Field(() => WorkshopDeviceOtpCreateWithoutWorkshopInput, {nullable:true})
    @Type(() => WorkshopDeviceOtpCreateWithoutWorkshopInput)
    @ValidateNested()
    create?: WorkshopDeviceOtpCreateWithoutWorkshopInput;

    @Field(() => WorkshopDeviceOtpCreateOrConnectWithoutWorkshopInput, {nullable:true})
    @Type(() => WorkshopDeviceOtpCreateOrConnectWithoutWorkshopInput)
    @ValidateNested()
    connectOrCreate?: WorkshopDeviceOtpCreateOrConnectWithoutWorkshopInput;

    @Field(() => WorkshopDeviceOtpUpsertWithoutWorkshopInput, {nullable:true})
    @Type(() => WorkshopDeviceOtpUpsertWithoutWorkshopInput)
    @ValidateNested()
    upsert?: WorkshopDeviceOtpUpsertWithoutWorkshopInput;

    @Field(() => WorkshopDeviceOtpWhereInput, {nullable:true})
    @Type(() => WorkshopDeviceOtpWhereInput)
    @ValidateNested()
    disconnect?: WorkshopDeviceOtpWhereInput;

    @Field(() => WorkshopDeviceOtpWhereInput, {nullable:true})
    @Type(() => WorkshopDeviceOtpWhereInput)
    @ValidateNested()
    delete?: WorkshopDeviceOtpWhereInput;

    @Field(() => WorkshopDeviceOtpWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopDeviceOtpWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<WorkshopDeviceOtpWhereUniqueInput, 'WorkshopDeviceOtpId' | 'workshopId' | 'code'>;

    @Field(() => WorkshopDeviceOtpUpdateToOneWithWhereWithoutWorkshopInput, {nullable:true})
    @Type(() => WorkshopDeviceOtpUpdateToOneWithWhereWithoutWorkshopInput)
    @ValidateNested()
    update?: WorkshopDeviceOtpUpdateToOneWithWhereWithoutWorkshopInput;
}
