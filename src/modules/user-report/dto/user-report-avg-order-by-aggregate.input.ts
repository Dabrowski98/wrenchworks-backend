import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserReportAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    reportId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reportedId?: keyof typeof SortOrder;

    }