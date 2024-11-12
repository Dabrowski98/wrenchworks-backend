import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CustomerAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    customerId?: true;

    @Field(() => Boolean, {nullable:true})
    workshopId?: true;

    @Field(() => Boolean, {nullable:true})
    totalDue?: true;
}
