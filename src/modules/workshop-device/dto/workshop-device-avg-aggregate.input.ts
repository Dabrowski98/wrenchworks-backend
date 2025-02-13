import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class WorkshopDeviceAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    workshopDeviceId?: true;

    @Field(() => Boolean, {nullable:true})
    workshopId?: true;

    @Field(() => Boolean, {nullable:true})
    lastLoginBy?: true;

    @HideField()
    updatedBy?: true;

    @Field(() => Boolean, {nullable:true})
    acceptedBy?: true;
}
