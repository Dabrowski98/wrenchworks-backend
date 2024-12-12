import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Workshop } from '../../workshop/dto/workshop.model';
import { Type } from 'class-transformer';

@ObjectType()
export class WorkshopDeviceOTP {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopDeviceOTPId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    employeeId!: bigint;

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
