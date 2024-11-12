import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';

@InputType()
export class UserReportMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    reportId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reportText?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reportedType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reportedId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
