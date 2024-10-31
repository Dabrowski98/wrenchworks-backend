import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class JobCount {

    @Field(() => Int, {nullable:false})
    jobServiceRequests?: number;

    @Field(() => Int, {nullable:false})
    jobWorkshops?: number;
}
