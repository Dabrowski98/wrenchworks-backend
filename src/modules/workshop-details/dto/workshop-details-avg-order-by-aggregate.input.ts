import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { HideField } from '@nestjs/graphql';

@InputType()
export class WorkshopDetailsAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    workshopId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rating?: keyof typeof SortOrder;

    }