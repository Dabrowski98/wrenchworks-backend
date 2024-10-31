import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class JobSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    jobId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;
}
