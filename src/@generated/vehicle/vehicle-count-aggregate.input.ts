import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class VehicleCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    vehicleId?: true;

    @Field(() => Boolean, {nullable:true})
    personId?: true;

    @Field(() => Boolean, {nullable:true})
    brandName?: true;

    @Field(() => Boolean, {nullable:true})
    modelId?: true;

    @Field(() => Boolean, {nullable:true})
    deletedAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
