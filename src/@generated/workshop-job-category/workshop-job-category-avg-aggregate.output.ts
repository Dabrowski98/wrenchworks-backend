import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class WorkshopJobCategoryAvgAggregate {

    @Field(() => Float, {nullable:true})
    workshopId?: number;

    @Field(() => Float, {nullable:true})
    categoryId?: number;
}
