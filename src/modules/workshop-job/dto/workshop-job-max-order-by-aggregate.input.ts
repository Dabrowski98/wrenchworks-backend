import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';

@InputType()
export class WorkshopJobMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    workshopJobId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workshopId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    jobId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workshopJobDescription?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    minPrice?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    maxPrice?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    availability?: keyof typeof SortOrder;
}
