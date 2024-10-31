import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ServiceRequestJobAvgAggregate {

    @Field(() => Float, {nullable:true})
    serviceRequestId?: number;

    @Field(() => Float, {nullable:true})
    jobId?: number;
}
