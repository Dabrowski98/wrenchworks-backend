import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class CustomerSumAggregateInput {

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

    @HideField()
    createdBy?: true;

    @HideField()
    updatedBy?: true;
}
