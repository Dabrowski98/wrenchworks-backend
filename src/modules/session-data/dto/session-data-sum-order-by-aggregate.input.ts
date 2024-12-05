import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';

@InputType()
export class SessionDataSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
}
