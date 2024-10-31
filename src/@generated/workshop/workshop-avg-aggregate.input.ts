import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class WorkshopAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    workshopId?: true;

    @Field(() => Boolean, {nullable:true})
    personId?: true;
}
