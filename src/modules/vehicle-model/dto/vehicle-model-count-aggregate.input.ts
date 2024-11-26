import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class VehicleModelCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    modelId?: true;

    @Field(() => Boolean, {nullable:true})
    modelName?: true;

    @Field(() => Boolean, {nullable:true})
    brand?: true;

    @HideField()
    createdAt?: true;

    @HideField()
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
