import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../../prisma/dto/big-int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../../prisma/dto/string-nullable-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../../prisma/dto/bool-with-aggregates-filter.input';

@InputType()
export class JobScalarWhereWithAggregatesInput {

    @Field(() => [JobScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<JobScalarWhereWithAggregatesInput>;

    @Field(() => [JobScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<JobScalarWhereWithAggregatesInput>;

    @Field(() => [JobScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<JobScalarWhereWithAggregatesInput>;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    jobId?: BigIntWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    categoryId?: BigIntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    name?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isPopular?: BoolWithAggregatesFilter;
}
