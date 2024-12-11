import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class WorkshopDeviceMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    workshopDeviceId?: true;

    @Field(() => Boolean, {nullable:true})
    workshopId?: true;

    @Field(() => Boolean, {nullable:true})
    serialNumber?: true;

    @Field(() => Boolean, {nullable:true})
    deviceName?: true;

    }