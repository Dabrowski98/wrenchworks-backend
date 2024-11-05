import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class WorkshopCount {

    @Field(() => Int, {nullable:false})
    addresses?: number;

    @Field(() => Int, {nullable:false})
    customers?: number;

    @Field(() => Int, {nullable:false})
    employees?: number;

    @Field(() => Int, {nullable:false})
    permissionSets?: number;

    @Field(() => Int, {nullable:false})
    reviews?: number;

    @Field(() => Int, {nullable:false})
    serviceRequests?: number;

    @Field(() => Int, {nullable:false})
    services?: number;

    @Field(() => Int, {nullable:false})
    workshopJobs?: number;

    @Field(() => Int, {nullable:false})
    jobCategories?: number;
}
