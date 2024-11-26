import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class VehicleBrandMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    brandName?: true;

    @HideField()
    createdAt?: true;

    @HideField()
    updatedAt?: true;
}
