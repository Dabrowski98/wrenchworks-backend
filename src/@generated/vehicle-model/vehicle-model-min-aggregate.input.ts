import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class VehicleModelMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    modelId?: true;

    @Field(() => Boolean, {nullable:true})
    modelName?: true;

    @Field(() => Boolean, {nullable:true})
    brandName?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
