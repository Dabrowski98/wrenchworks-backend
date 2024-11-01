import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PersonWhereInput } from './person-where.input';
import { Type } from 'class-transformer';
import { PersonOrderByWithRelationInput } from './person-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PersonWhereUniqueInput } from './person-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PersonCountAggregateInput } from './person-count-aggregate.input';
import { PersonAvgAggregateInput } from './person-avg-aggregate.input';
import { PersonSumAggregateInput } from './person-sum-aggregate.input';
import { PersonMinAggregateInput } from './person-min-aggregate.input';
import { PersonMaxAggregateInput } from './person-max-aggregate.input';

@ArgsType()
export class PersonAggregateArgs {

    @Field(() => PersonWhereInput, {nullable:true})
    @Type(() => PersonWhereInput)
    where?: PersonWhereInput;

    @Field(() => [PersonOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PersonOrderByWithRelationInput>;

    @Field(() => PersonWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PersonWhereUniqueInput, 'personId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PersonCountAggregateInput, {nullable:true})
    _count?: PersonCountAggregateInput;

    @Field(() => PersonAvgAggregateInput, {nullable:true})
    _avg?: PersonAvgAggregateInput;

    @Field(() => PersonSumAggregateInput, {nullable:true})
    _sum?: PersonSumAggregateInput;

    @Field(() => PersonMinAggregateInput, {nullable:true})
    _min?: PersonMinAggregateInput;

    @Field(() => PersonMaxAggregateInput, {nullable:true})
    _max?: PersonMaxAggregateInput;
}
