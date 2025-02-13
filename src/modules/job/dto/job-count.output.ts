import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class JobCount {

    @Field(() => Int, {nullable:false})
    serviceRequests?: number;

    @Field(() => Int, {nullable:false})
    workshopJobs?: number;
}
