import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DecimalNullableFilter } from '../prisma/decimal-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { JobRelationFilter } from '../job/job-relation-filter.input';
import { WorkshopRelationFilter } from '../workshop/workshop-relation-filter.input';

@InputType()
export class WorkshopJobWhereInput {

    @Field(() => [WorkshopJobWhereInput], {nullable:true})
    @Type(() => WorkshopJobWhereInput)
    AND?: Array<WorkshopJobWhereInput>;

    @Field(() => [WorkshopJobWhereInput], {nullable:true})
    @Type(() => WorkshopJobWhereInput)
    OR?: Array<WorkshopJobWhereInput>;

    @Field(() => [WorkshopJobWhereInput], {nullable:true})
    @Type(() => WorkshopJobWhereInput)
    NOT?: Array<WorkshopJobWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    workshopJobId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    workshopId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    jobId?: BigIntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    workshopDescription?: StringNullableFilter;

    @Field(() => DecimalNullableFilter, {nullable:true})
    @Type(() => DecimalNullableFilter)
    minPrice?: DecimalNullableFilter;

    @Field(() => DecimalNullableFilter, {nullable:true})
    @Type(() => DecimalNullableFilter)
    maxPrice?: DecimalNullableFilter;

    @Field(() => DecimalNullableFilter, {nullable:true})
    @Type(() => DecimalNullableFilter)
    price?: DecimalNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    availability?: BoolFilter;

    @Field(() => JobRelationFilter, {nullable:true})
    @Type(() => JobRelationFilter)
    job?: JobRelationFilter;

    @Field(() => WorkshopRelationFilter, {nullable:true})
    @Type(() => WorkshopRelationFilter)
    workshop?: WorkshopRelationFilter;
}
