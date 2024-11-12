import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';

@InputType()
export class AddressAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    addressId?: keyof typeof SortOrder;
}
