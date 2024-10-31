import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class AddressSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    addressId?: keyof typeof SortOrder;
}
