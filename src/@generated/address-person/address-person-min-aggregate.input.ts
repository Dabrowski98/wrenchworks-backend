import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AddressPersonMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    addressId?: true;

    @Field(() => Boolean, {nullable:true})
    personId?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}
