import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class WorkshopAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    workshopId?: true;

    @Field(() => Boolean, {nullable:true})
    ownerId?: true;

    @Field(() => Boolean, {nullable:true})
    addressId?: true;

    @HideField()
    updatedBy?: true;
}
