import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Workshop } from '../../workshop/dto/workshop.model';
import { Type } from 'class-transformer';

@ObjectType()
export class WorkshopDevice {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopDeviceId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint;

    @Field(() => String, {nullable:false})
    serialNumber!: string;

    @Field(() => String, {nullable:false})
    deviceName!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => String, {nullable:false})
    createdBy!: bigint;

    @Field(() => Workshop, {nullable:false})
    @Type(() => Workshop)
    workshop?: Workshop;
}
