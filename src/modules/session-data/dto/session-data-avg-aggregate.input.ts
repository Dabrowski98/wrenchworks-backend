import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SessionDataAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    sessionDataId?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;
}
