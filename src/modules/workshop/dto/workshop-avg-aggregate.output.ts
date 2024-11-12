import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class WorkshopAvgAggregate {

    @Field(() => Float, {nullable:true})
    workshopId?: number;

    @Field(() => Float, {nullable:true})
    personId?: number;

    @Field(() => Float, {nullable:true})
    addressId?: number;
}
