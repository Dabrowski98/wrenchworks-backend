import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class WorkshopDeviceMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    workshopDeviceId?: true;

    @Field(() => Boolean, {nullable:true})
    workshopId?: true;

    @Field(() => Boolean, {nullable:true})
    serialNumber?: true;

    @Field(() => Boolean, {nullable:true})
    deviceName?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    lastLoginAt?: true;

    @Field(() => Boolean, {nullable:true})
    lastLoginBy?: true;

    @Field(() => Boolean, {nullable:true})
    acceptedAt?: true;

    @Field(() => Boolean, {nullable:true})
    acceptedBy?: true;
}