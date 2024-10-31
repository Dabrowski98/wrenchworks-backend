import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';

@InputType()
export class ServiceRequestJobUncheckedCreateWithoutServiceRequestInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    jobId!: bigint | number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
