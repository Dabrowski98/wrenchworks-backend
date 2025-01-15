import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopDeviceOtpWhereInput } from './workshop-device-otp-where.input';
import { Type } from 'class-transformer';
import { WorkshopDeviceOtpOrderByWithRelationInput } from './workshop-device-otp-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { WorkshopDeviceOtpWhereUniqueInput } from './workshop-device-otp-where-unique.input';
import { Int } from '@nestjs/graphql';
import { WorkshopDeviceOtpScalarFieldEnum } from './workshop-device-otp-scalar-field.enum';

@ArgsType()
export class FindFirstWorkshopDeviceOtpArgs {

    @Field(() => WorkshopDeviceOtpWhereInput, {nullable:true})
    @Type(() => WorkshopDeviceOtpWhereInput)
    where?: WorkshopDeviceOtpWhereInput;

    @Field(() => [WorkshopDeviceOtpOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<WorkshopDeviceOtpOrderByWithRelationInput>;

    @Field(() => WorkshopDeviceOtpWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<WorkshopDeviceOtpWhereUniqueInput, 'WorkshopDeviceOtpId' | 'workshopId' | 'code'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [WorkshopDeviceOtpScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof WorkshopDeviceOtpScalarFieldEnum>;
}
