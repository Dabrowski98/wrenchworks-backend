import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { HideField } from '@nestjs/graphql';

@InputType()
export class WorkshopDeviceMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    workshopDeviceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workshopId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    serialNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deviceName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastLoginAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastLoginBy?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    acceptedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    acceptedBy?: keyof typeof SortOrder;
}