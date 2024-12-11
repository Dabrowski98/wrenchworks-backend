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

    }