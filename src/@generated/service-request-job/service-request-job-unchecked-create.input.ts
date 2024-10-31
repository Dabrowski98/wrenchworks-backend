import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';

@InputType()
export class ServiceRequestJobUncheckedCreateInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    serviceRequestId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    jobId!: bigint | number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
