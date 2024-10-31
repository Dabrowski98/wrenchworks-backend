import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';

@ObjectType()
export class ServiceRequestJobMaxAggregate {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    serviceRequestId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    jobId?: bigint | number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
