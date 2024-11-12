import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { PersonOrderByWithRelationInput } from '../../person/dto/person-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { WorkshopOrderByWithRelationInput } from '../../workshop/dto/workshop-order-by-with-relation.input';
import { ServiceOrderByRelationAggregateInput } from '../../service/dto/service-order-by-relation-aggregate.input';

@InputType()
export class CustomerOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    customerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workshopId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    totalDue?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    deletedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    NIP?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    companyName?: SortOrderInput;

    @Field(() => PersonOrderByWithRelationInput, {nullable:true})
    @Type(() => PersonOrderByWithRelationInput)
    person?: PersonOrderByWithRelationInput;

    @Field(() => WorkshopOrderByWithRelationInput, {nullable:true})
    @Type(() => WorkshopOrderByWithRelationInput)
    workshop?: WorkshopOrderByWithRelationInput;

    @Field(() => ServiceOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ServiceOrderByRelationAggregateInput)
    services?: ServiceOrderByRelationAggregateInput;
}
