import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class VehicleModelSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    modelId?: true;
}
