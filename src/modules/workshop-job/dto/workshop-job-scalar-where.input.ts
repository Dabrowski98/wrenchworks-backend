import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { StringNullableFilter } from '../../prisma/dto/string-nullable-filter.input';
import { DecimalNullableFilter } from '../../prisma/dto/decimal-nullable-filter.input';
import { BoolFilter } from '../../prisma/dto/bool-filter.input';

@InputType()
export class WorkshopJobScalarWhereInput {

    @Field(() => [WorkshopJobScalarWhereInput], {nullable:true})
    @Type(() => WorkshopJobScalarWhereInput)
    AND?: Array<WorkshopJobScalarWhereInput>;

    @Field(() => [WorkshopJobScalarWhereInput], {nullable:true})
    @Type(() => WorkshopJobScalarWhereInput)
    OR?: Array<WorkshopJobScalarWhereInput>;

    @Field(() => [WorkshopJobScalarWhereInput], {nullable:true})
    @Type(() => WorkshopJobScalarWhereInput)
    NOT?: Array<WorkshopJobScalarWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    workshopJobId?: BigIntFilter;

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
}
