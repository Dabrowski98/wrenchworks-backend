import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ServiceSumAggregateInput {

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
    paymentAmount?: true;

    }