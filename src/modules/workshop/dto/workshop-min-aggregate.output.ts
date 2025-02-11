import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';

@ObjectType()
export class WorkshopMinAggregate {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    ownerId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    addressId?: bigint | number;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    telephoneNumber?: string;

    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;

    @Field(() => Boolean, {nullable:true})
    isManagingWork?: boolean;

    @Field(() => Boolean, {nullable:true})
    isOfferingService?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    updatedBy?: bigint | number;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
}
