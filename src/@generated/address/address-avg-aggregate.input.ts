import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AddressAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    addressId?: true;
}
