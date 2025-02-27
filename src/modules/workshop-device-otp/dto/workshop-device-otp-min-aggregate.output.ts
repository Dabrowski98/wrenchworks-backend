import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';

@ObjectType()
export class WorkshopDeviceOtpMinAggregate {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    WorkshopDeviceOtpId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    employeeId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopId?: bigint | number;

    @Field(() => String, {nullable:true})
    code?: string;

    @Field(() => Date, {nullable:true})
    expiresAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
