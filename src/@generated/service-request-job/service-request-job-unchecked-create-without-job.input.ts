import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';

@InputType()
export class ServiceRequestJobUncheckedCreateWithoutJobInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    serviceRequestId!: bigint | number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
