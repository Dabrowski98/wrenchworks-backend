import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { PersonOrderByRelationAggregateInput } from '../../person/dto/person-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';
import { WorkshopOrderByRelationAggregateInput } from '../../workshop/dto/workshop-order-by-relation-aggregate.input';

@InputType()
export class AddressOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    addressId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    country?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    region?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    city?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    street?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    buildingNo?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    flatNo?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    postCode?: keyof typeof SortOrder;

    @Field(() => PersonOrderByRelationAggregateInput, {nullable:true})
    @Type(() => PersonOrderByRelationAggregateInput)
    persons?: PersonOrderByRelationAggregateInput;

    @Field(() => WorkshopOrderByRelationAggregateInput, {nullable:true})
    @Type(() => WorkshopOrderByRelationAggregateInput)
    workshops?: WorkshopOrderByRelationAggregateInput;
}
