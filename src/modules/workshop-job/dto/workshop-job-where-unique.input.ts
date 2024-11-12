import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { WorkshopJobWorkshopIdJobIdCompoundUniqueInput } from './workshop-job-workshop-id-job-id-compound-unique.input';
import { Type } from 'class-transformer';
import { WorkshopJobWhereInput } from './workshop-job-where.input';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { StringNullableFilter } from '../../prisma/dto/string-nullable-filter.input';
import { DecimalNullableFilter } from '../../prisma/dto/decimal-nullable-filter.input';
import { BoolFilter } from '../../prisma/dto/bool-filter.input';
import { JobRelationFilter } from '../../job/dto/job-relation-filter.input';
import { WorkshopRelationFilter } from '../../workshop/dto/workshop-relation-filter.input';

@InputType()
export class WorkshopJobWhereUniqueInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopJobId?: bigint | number;

    @Field(() => WorkshopJobWorkshopIdJobIdCompoundUniqueInput, {nullable:true})
    @Type(() => WorkshopJobWorkshopIdJobIdCompoundUniqueInput)
    workshopId_jobId?: WorkshopJobWorkshopIdJobIdCompoundUniqueInput;

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
    workshopId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    jobId?: BigIntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    workshopJobDescription?: StringNullableFilter;

    @Field(() => DecimalNullableFilter, {nullable:true})
    @Type(() => DecimalNullableFilter)
    minPrice?: DecimalNullableFilter;

    @Field(() => DecimalNullableFilter, {nullable:true})
    @Type(() => DecimalNullableFilter)
    maxPrice?: DecimalNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    availability?: BoolFilter;

    @Field(() => JobRelationFilter, {nullable:true})
    @Type(() => JobRelationFilter)
    job?: JobRelationFilter;

    @Field(() => WorkshopRelationFilter, {nullable:true})
    @Type(() => WorkshopRelationFilter)
    workshop?: WorkshopRelationFilter;
}
