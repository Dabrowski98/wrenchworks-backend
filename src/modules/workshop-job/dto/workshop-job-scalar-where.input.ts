import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { StringNullableFilter } from '../../prisma/dto/string-nullable-filter.input';
import { DecimalNullableFilter } from '../../prisma/dto/decimal-nullable-filter.input';
import { BoolFilter } from '../../prisma/dto/bool-filter.input';
import { DateTimeNullableFilter } from '../../prisma/dto/date-time-nullable-filter.input';
import { HideField } from 'nestjs-graphql';
import { BigIntNullableFilter } from '../../prisma/dto/big-int-nullable-filter.input';

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

    @Field(() => DateTimeNullableFilter, {nullable:true})
    @HideField()
    createdAt?: DateTimeNullableFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    @HideField()
    createdBy?: BigIntNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    @HideField()
    updatedAt?: DateTimeNullableFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    @HideField()
    updatedBy?: BigIntNullableFilter;
}
