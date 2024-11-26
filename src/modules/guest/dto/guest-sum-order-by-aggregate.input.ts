import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';

@InputType()
export class GuestSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    guestId?: keyof typeof SortOrder;
}
