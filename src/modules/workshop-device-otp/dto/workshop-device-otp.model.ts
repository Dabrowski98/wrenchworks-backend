import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Workshop } from '../../workshop/dto/workshop.model';
import { Type } from 'class-transformer';

@ObjectType()
export class WorkshopDeviceOtp {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    WorkshopDeviceOtpId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    employeeId!: bigint | null;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => Date, {nullable:false})
    expiresAt!: Date;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Workshop, {nullable:false})
    @Type(() => Workshop)
    workshop?: Workshop;
}
