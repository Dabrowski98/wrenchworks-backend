import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ServiceRequestAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    serviceRequestId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workshopId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    vehicleId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    guestId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    approvedServiceId?: keyof typeof SortOrder;

    }