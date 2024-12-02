import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SessionDataSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    sessionDataId?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;
}
