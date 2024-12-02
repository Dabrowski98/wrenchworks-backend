import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ServiceMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    serviceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    serviceRequestId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workshopId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    vehicleId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    customerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    employeeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    payedOff?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    paymentAmount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    serviceStartDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    serviceEndDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    addedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    addedBy?: keyof typeof SortOrder;

    }