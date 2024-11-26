import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { HideField } from 'nestjs-graphql';

@InputType()
export class TaskSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    taskId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    serviceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workshopJobId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    executionTime?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    partsCost?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    @HideField()
    createdBy?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    @HideField()
    updatedBy?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    @HideField()
    resolvedBy?: keyof typeof SortOrder;
}
