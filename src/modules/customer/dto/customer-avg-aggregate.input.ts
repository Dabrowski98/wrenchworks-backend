import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from 'nestjs-graphql';

@InputType()
export class CustomerAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    customerId?: true;

    @Field(() => Boolean, {nullable:true})
    workshopId?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    guestId?: true;

    @Field(() => Boolean, {nullable:true})
    totalDue?: true;

    @Field(() => Boolean, {nullable:true})
    @HideField()
    createdBy?: true;

    @Field(() => Boolean, {nullable:true})
    @HideField()
    updatedBy?: true;
}
