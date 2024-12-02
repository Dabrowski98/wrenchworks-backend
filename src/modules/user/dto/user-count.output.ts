import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {

    @Field(() => Int, {nullable:false})
    vehicles?: number;

    @Field(() => Int, {nullable:false})
    serviceRequests?: number;

    @Field(() => Int, {nullable:false})
    customers?: number;

    @Field(() => Int, {nullable:false})
    employees?: number;

    @Field(() => Int, {nullable:false})
    workshops?: number;

    @Field(() => Int, {nullable:false})
    reviews?: number;

    @Field(() => Int, {nullable:false})
    reviewResponses?: number;

    @Field(() => Int, {nullable:false})
    userReports?: number;

    @Field(() => Int, {nullable:false})
    joinWorkshopRequests?: number;

    @Field(() => Int, {nullable:false})
    sessionData?: number;
}
