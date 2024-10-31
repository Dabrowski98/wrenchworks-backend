import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { AddressPersonOrderByRelationAggregateInput } from '../address-person/address-person-order-by-relation-aggregate.input';
import { AddressWorkshopOrderByRelationAggregateInput } from '../address-workshop/address-workshop-order-by-relation-aggregate.input';

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

    @Field(() => AddressPersonOrderByRelationAggregateInput, {nullable:true})
    addressPersons?: AddressPersonOrderByRelationAggregateInput;

    @Field(() => AddressWorkshopOrderByRelationAggregateInput, {nullable:true})
    addressWorkshops?: AddressWorkshopOrderByRelationAggregateInput;
}
