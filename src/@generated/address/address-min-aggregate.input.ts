import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AddressMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    addressId?: true;

    @Field(() => Boolean, {nullable:true})
    country?: true;

    @Field(() => Boolean, {nullable:true})
    region?: true;

    @Field(() => Boolean, {nullable:true})
    city?: true;

    @Field(() => Boolean, {nullable:true})
    street?: true;

    @Field(() => Boolean, {nullable:true})
    buildingNo?: true;

    @Field(() => Boolean, {nullable:true})
    flatNo?: true;

    @Field(() => Boolean, {nullable:true})
    postCode?: true;
}
