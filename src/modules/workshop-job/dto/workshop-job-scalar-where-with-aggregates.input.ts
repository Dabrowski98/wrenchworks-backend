import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { BigIntWithAggregatesFilter } from '../../prisma/dto/big-int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../../prisma/dto/string-nullable-with-aggregates-filter.input';
import { DecimalNullableWithAggregatesFilter } from '../../prisma/dto/decimal-nullable-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../../prisma/dto/bool-with-aggregates-filter.input';

@InputType()
export class WorkshopJobScalarWhereWithAggregatesInput {

    @Field(() => [WorkshopJobScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => WorkshopJobScalarWhereWithAggregatesInput)
    AND?: Array<WorkshopJobScalarWhereWithAggregatesInput>;

    @Field(() => [WorkshopJobScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => WorkshopJobScalarWhereWithAggregatesInput)
    OR?: Array<WorkshopJobScalarWhereWithAggregatesInput>;

    @Field(() => [WorkshopJobScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => WorkshopJobScalarWhereWithAggregatesInput)
    NOT?: Array<WorkshopJobScalarWhereWithAggregatesInput>;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    workshopJobId?: BigIntWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    workshopId?: BigIntWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    jobId?: BigIntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    workshopJobDescription?: StringNullableWithAggregatesFilter;

    @Field(() => DecimalNullableWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalNullableWithAggregatesFilter)
    minPrice?: DecimalNullableWithAggregatesFilter;

    @Field(() => DecimalNullableWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalNullableWithAggregatesFilter)
    maxPrice?: DecimalNullableWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    availability?: BoolWithAggregatesFilter;
}
