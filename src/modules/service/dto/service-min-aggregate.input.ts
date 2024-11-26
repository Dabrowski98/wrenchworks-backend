import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from 'nestjs-graphql';

@InputType()
export class ServiceMinAggregateInput {

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
    status?: true;

    @Field(() => Boolean, {nullable:true})
    payedOff?: true;

    @Field(() => Boolean, {nullable:true})
    paymentAmount?: true;

    @Field(() => Boolean, {nullable:true})
    serviceStartDate?: true;

    @Field(() => Boolean, {nullable:true})
    serviceEndDate?: true;

    @Field(() => Boolean, {nullable:true})
    addedAt?: true;

    @Field(() => Boolean, {nullable:true})
    addedBy?: true;

    @Field(() => Boolean, {nullable:true})
    @HideField()
    resolvedAt?: true;

    @Field(() => Boolean, {nullable:true})
    @HideField()
    resolvedBy?: true;

    @Field(() => Boolean, {nullable:true})
    @HideField()
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    @HideField()
    updatedBy?: true;

    @Field(() => Boolean, {nullable:true})
    @HideField()
    deletedAt?: true;
}
