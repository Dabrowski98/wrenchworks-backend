import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { HideField } from '@nestjs/graphql';
import { CustomerCountOrderByAggregateInput } from './customer-count-order-by-aggregate.input';
import { Type } from 'class-transformer';
import { CustomerAvgOrderByAggregateInput } from './customer-avg-order-by-aggregate.input';
import { CustomerMaxOrderByAggregateInput } from './customer-max-order-by-aggregate.input';
import { CustomerMinOrderByAggregateInput } from './customer-min-order-by-aggregate.input';
import { CustomerSumOrderByAggregateInput } from './customer-sum-order-by-aggregate.input';

@InputType()
export class CustomerOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    customerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workshopId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    userId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    guestId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    firstName?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    creationSource?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    telephoneNumber?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    email?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    isVerified?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    totalDue?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    NIP?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    companyName?: SortOrderInput;

    @HideField()
    deletedAt?: SortOrderInput;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    createdBy?: SortOrderInput;

    @HideField()
    updatedAt?: SortOrderInput;

    @HideField()
    updatedBy?: SortOrderInput;

    @Field(() => CustomerCountOrderByAggregateInput, {nullable:true})
    @Type(() => CustomerCountOrderByAggregateInput)
    _count?: CustomerCountOrderByAggregateInput;

    @Field(() => CustomerAvgOrderByAggregateInput, {nullable:true})
    @Type(() => CustomerAvgOrderByAggregateInput)
    _avg?: CustomerAvgOrderByAggregateInput;

    @Field(() => CustomerMaxOrderByAggregateInput, {nullable:true})
    @Type(() => CustomerMaxOrderByAggregateInput)
    _max?: CustomerMaxOrderByAggregateInput;

    @Field(() => CustomerMinOrderByAggregateInput, {nullable:true})
    @Type(() => CustomerMinOrderByAggregateInput)
    _min?: CustomerMinOrderByAggregateInput;

    @Field(() => CustomerSumOrderByAggregateInput, {nullable:true})
    @Type(() => CustomerSumOrderByAggregateInput)
    _sum?: CustomerSumOrderByAggregateInput;
}
