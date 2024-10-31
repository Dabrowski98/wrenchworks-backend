import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class AddressMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    addressId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    country?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    region?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    city?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    street?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    buildingNo?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    flatNo?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    postCode?: keyof typeof SortOrder;
}
