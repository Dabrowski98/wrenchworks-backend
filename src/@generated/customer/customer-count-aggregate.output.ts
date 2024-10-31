import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CustomerCountAggregate {

    @Field(() => Int, {nullable:false})
    customerId!: number;

    @Field(() => Int, {nullable:false})
    workshopId!: number;

    @Field(() => Int, {nullable:false})
    totalDue!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    deletedAt!: number;

    @Field(() => Int, {nullable:false})
    NIP!: number;

    @Field(() => Int, {nullable:false})
    companyName!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
