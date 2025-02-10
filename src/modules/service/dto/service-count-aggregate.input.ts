import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ServiceCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    serviceId?: true;

    @Field(() => Boolean, {nullable:true})
    serviceRequestId?: true;

    @Field(() => Boolean, {nullable:true})
    workshopId?: true;

    @Field(() => Boolean, {nullable:true})
    vehicleId?: true;

    @Field(() => Boolean, {nullable:true})
    customerId?: true;

    @Field(() => Boolean, {nullable:true})
    employeeId?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    serviceDescription?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    payedOff?: true;

    @Field(() => Boolean, {nullable:true})
    paymentAmount?: true;

    @Field(() => Boolean, {nullable:true})
    serviceStartDate?: true;

    @Field(() => Boolean, {nullable:true})
    serviceEndDate?: true;

    @HideField()
    addedAt?: true;

    @HideField()
    addedBy?: true;

    @HideField()
    resolvedAt?: true;

    @HideField()
    resolvedBy?: true;

    @HideField()
    updatedAt?: true;

    @HideField()
    updatedBy?: true;

    @HideField()
    deletedAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
