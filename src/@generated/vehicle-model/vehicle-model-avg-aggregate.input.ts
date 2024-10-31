import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class VehicleModelAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    modelId?: true;
}
