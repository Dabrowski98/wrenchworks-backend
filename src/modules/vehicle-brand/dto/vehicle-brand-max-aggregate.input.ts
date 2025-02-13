import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class VehicleBrandMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    brandName?: true;

    }