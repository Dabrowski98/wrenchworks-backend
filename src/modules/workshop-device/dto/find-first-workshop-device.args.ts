import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopDeviceWhereInput } from './workshop-device-where.input';
import { Type } from 'class-transformer';
import { WorkshopDeviceOrderByWithRelationInput } from './workshop-device-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { WorkshopDeviceWhereUniqueInput } from './workshop-device-where-unique.input';
import { Int } from '@nestjs/graphql';
import { WorkshopDeviceScalarFieldEnum } from './workshop-device-scalar-field.enum';

@ArgsType()
export class FindFirstWorkshopDeviceArgs {

    @Field(() => WorkshopDeviceWhereInput, {nullable:true})
    @Type(() => WorkshopDeviceWhereInput)
    where?: WorkshopDeviceWhereInput;

    @Field(() => [WorkshopDeviceOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<WorkshopDeviceOrderByWithRelationInput>;

    @Field(() => WorkshopDeviceWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<WorkshopDeviceWhereUniqueInput, 'workshopDeviceId' | 'workshopId_serialNumber'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [WorkshopDeviceScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof WorkshopDeviceScalarFieldEnum>;
}
