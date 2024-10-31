import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ServiceRequestJobCountAggregate {

    @Field(() => Int, {nullable:false})
    serviceRequestId!: number;

    @Field(() => Int, {nullable:false})
    jobId!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
