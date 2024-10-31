import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../prisma/big-int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class WorkshopJobCategoryScalarWhereWithAggregatesInput {

    @Field(() => [WorkshopJobCategoryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<WorkshopJobCategoryScalarWhereWithAggregatesInput>;

    @Field(() => [WorkshopJobCategoryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<WorkshopJobCategoryScalarWhereWithAggregatesInput>;

    @Field(() => [WorkshopJobCategoryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<WorkshopJobCategoryScalarWhereWithAggregatesInput>;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    workshopId?: BigIntWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    categoryId?: BigIntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
