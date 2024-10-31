import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ServiceRequestCount {

    @Field(() => Int, {nullable:false})
    serviceRequestJobs?: number;
}
