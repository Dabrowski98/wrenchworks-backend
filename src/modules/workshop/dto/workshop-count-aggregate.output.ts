import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class WorkshopCountAggregate {

    @Field(() => Int, {nullable:false})
    workshopId!: number;

    @Field(() => Int, {nullable:false})
    personId!: number;

    @Field(() => Int, {nullable:false})
    addressId!: number;

    @Field(() => Int, {nullable:false})
    email!: number;

    @Field(() => Int, {nullable:false})
    isVerified!: number;

    @Field(() => Int, {nullable:false})
    isManagingWork!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    deletedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
