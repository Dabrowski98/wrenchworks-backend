import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from 'nestjs-graphql';

@InputType()
export class ServiceRequestMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    serviceRequestId?: true;

    @Field(() => Boolean, {nullable:true})
    workshopId?: true;

    @Field(() => Boolean, {nullable:true})
    vehicleId?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    guestId?: true;

    @Field(() => Boolean, {nullable:true})
    approvedServiceId?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    @HideField()
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    @HideField()
    resolvedAt?: true;

    @Field(() => Boolean, {nullable:true})
    @HideField()
    resolvedBy?: true;

    @Field(() => Boolean, {nullable:true})
    @HideField()
    deletedAt?: true;
}
