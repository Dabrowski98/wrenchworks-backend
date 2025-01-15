import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopDeviceOtpWhereInput } from './workshop-device-otp-where.input';
import { Type } from 'class-transformer';
import { WorkshopDeviceOtpOrderByWithRelationInput } from './workshop-device-otp-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { WorkshopDeviceOtpWhereUniqueInput } from './workshop-device-otp-where-unique.input';
import { Int } from '@nestjs/graphql';
import { WorkshopDeviceOtpCountAggregateInput } from './workshop-device-otp-count-aggregate.input';
import { WorkshopDeviceOtpAvgAggregateInput } from './workshop-device-otp-avg-aggregate.input';
import { WorkshopDeviceOtpSumAggregateInput } from './workshop-device-otp-sum-aggregate.input';
import { WorkshopDeviceOtpMinAggregateInput } from './workshop-device-otp-min-aggregate.input';
import { WorkshopDeviceOtpMaxAggregateInput } from './workshop-device-otp-max-aggregate.input';

@ArgsType()
export class WorkshopDeviceOtpAggregateArgs {

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

    @Field(() => WorkshopDeviceOtpCountAggregateInput, {nullable:true})
    _count?: WorkshopDeviceOtpCountAggregateInput;

    @Field(() => WorkshopDeviceOtpAvgAggregateInput, {nullable:true})
    _avg?: WorkshopDeviceOtpAvgAggregateInput;

    @Field(() => WorkshopDeviceOtpSumAggregateInput, {nullable:true})
    _sum?: WorkshopDeviceOtpSumAggregateInput;

    @Field(() => WorkshopDeviceOtpMinAggregateInput, {nullable:true})
    _min?: WorkshopDeviceOtpMinAggregateInput;

    @Field(() => WorkshopDeviceOtpMaxAggregateInput, {nullable:true})
    _max?: WorkshopDeviceOtpMaxAggregateInput;
}
