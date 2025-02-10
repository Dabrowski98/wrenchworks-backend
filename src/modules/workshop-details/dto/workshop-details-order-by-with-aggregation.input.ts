import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { Type } from 'class-transformer';
import { HideField } from '@nestjs/graphql';
import { WorkshopDetailsCountOrderByAggregateInput } from './workshop-details-count-order-by-aggregate.input';
import { WorkshopDetailsAvgOrderByAggregateInput } from './workshop-details-avg-order-by-aggregate.input';
import { WorkshopDetailsMaxOrderByAggregateInput } from './workshop-details-max-order-by-aggregate.input';
import { WorkshopDetailsMinOrderByAggregateInput } from './workshop-details-min-order-by-aggregate.input';
import { WorkshopDetailsSumOrderByAggregateInput } from './workshop-details-sum-order-by-aggregate.input';

@InputType()
export class WorkshopDetailsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    workshopId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    @Type(() => SortOrderInput)
    rating?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    workshopName?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    logoURL?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    status?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    NIP?: SortOrderInput;

    @HideField()
    updatedAt?: SortOrderInput;

    @HideField()
    updatedBy?: SortOrderInput;

    @HideField()
    deletedAt?: SortOrderInput;

    @Field(() => WorkshopDetailsCountOrderByAggregateInput, {nullable:true})
    @Type(() => WorkshopDetailsCountOrderByAggregateInput)
    _count?: WorkshopDetailsCountOrderByAggregateInput;

    @Field(() => WorkshopDetailsAvgOrderByAggregateInput, {nullable:true})
    @Type(() => WorkshopDetailsAvgOrderByAggregateInput)
    _avg?: WorkshopDetailsAvgOrderByAggregateInput;

    @Field(() => WorkshopDetailsMaxOrderByAggregateInput, {nullable:true})
    @Type(() => WorkshopDetailsMaxOrderByAggregateInput)
    _max?: WorkshopDetailsMaxOrderByAggregateInput;

    @Field(() => WorkshopDetailsMinOrderByAggregateInput, {nullable:true})
    @Type(() => WorkshopDetailsMinOrderByAggregateInput)
    _min?: WorkshopDetailsMinOrderByAggregateInput;

    @Field(() => WorkshopDetailsSumOrderByAggregateInput, {nullable:true})
    @Type(() => WorkshopDetailsSumOrderByAggregateInput)
    _sum?: WorkshopDetailsSumOrderByAggregateInput;
}
