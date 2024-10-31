import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ServiceRequestJobMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    serviceRequestId?: true;

    @Field(() => Boolean, {nullable:true})
    jobId?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}
