import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { PersonCountAggregate } from './person-count-aggregate.output';
import { PersonAvgAggregate } from './person-avg-aggregate.output';
import { PersonSumAggregate } from './person-sum-aggregate.output';
import { PersonMinAggregate } from './person-min-aggregate.output';
import { PersonMaxAggregate } from './person-max-aggregate.output';

@ObjectType()
export class PersonGroupBy {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    personId!: bigint | number;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:true})
    telephoneNumber?: string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => PersonCountAggregate, {nullable:true})
    _count?: PersonCountAggregate;

    @Field(() => PersonAvgAggregate, {nullable:true})
    _avg?: PersonAvgAggregate;

    @Field(() => PersonSumAggregate, {nullable:true})
    _sum?: PersonSumAggregate;

    @Field(() => PersonMinAggregate, {nullable:true})
    _min?: PersonMinAggregate;

    @Field(() => PersonMaxAggregate, {nullable:true})
    _max?: PersonMaxAggregate;
}
