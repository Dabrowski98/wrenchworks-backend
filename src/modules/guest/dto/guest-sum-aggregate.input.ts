import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class GuestSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    guestId?: true;
}
