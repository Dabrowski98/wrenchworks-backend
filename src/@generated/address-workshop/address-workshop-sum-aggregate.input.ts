import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AddressWorkshopSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    addressId?: true;

    @Field(() => Boolean, {nullable:true})
    workshopId?: true;
}
