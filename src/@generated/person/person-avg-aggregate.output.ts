import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class PersonAvgAggregate {

    @Field(() => Float, {nullable:true})
    personId?: number;
}
