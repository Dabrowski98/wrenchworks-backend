import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../prisma/big-int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BigIntNullableWithAggregatesFilter } from '../prisma/big-int-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class JobCategoryScalarWhereWithAggregatesInput {

    @Field(() => [JobCategoryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<JobCategoryScalarWhereWithAggregatesInput>;

    @Field(() => [JobCategoryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<JobCategoryScalarWhereWithAggregatesInput>;

    @Field(() => [JobCategoryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<JobCategoryScalarWhereWithAggregatesInput>;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    categoryId?: BigIntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => BigIntNullableWithAggregatesFilter, {nullable:true})
    parentId?: BigIntNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isPopular?: BoolWithAggregatesFilter;
}
