import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class VehicleModelCountAggregate {

    @Field(() => Int, {nullable:false})
    modelId!: number;

    @Field(() => Int, {nullable:false})
    modelName!: number;

    @Field(() => Int, {nullable:false})
    brandName!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
