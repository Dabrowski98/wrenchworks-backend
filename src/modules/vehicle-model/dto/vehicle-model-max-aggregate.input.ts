import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from 'nestjs-graphql';

@InputType()
export class VehicleModelMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    modelId?: true;

    @Field(() => Boolean, {nullable:true})
    modelName?: true;

    @Field(() => Boolean, {nullable:true})
    brand?: true;

    @Field(() => Boolean, {nullable:true})
    @HideField()
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    @HideField()
    updatedAt?: true;
}
