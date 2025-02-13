import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { WorkshopDetailsWhereInput } from './workshop-details-where.input';
import { Type } from 'class-transformer';
import { DecimalNullableFilter } from '../../prisma/dto/decimal-nullable-filter.input';
import { StringFilter } from '../../prisma/dto/string-filter.input';
import { StringNullableFilter } from '../../prisma/dto/string-nullable-filter.input';
import { EnumWorkshopDetailsStatusNullableFilter } from '../../prisma/dto/enum-workshop-details-status-nullable-filter.input';
import { DateTimeNullableFilter } from '../../prisma/dto/date-time-nullable-filter.input';
import { HideField } from '@nestjs/graphql';
import { BigIntNullableFilter } from '../../prisma/dto/big-int-nullable-filter.input';
import { WorkshopRelationFilter } from '../../workshop/dto/workshop-relation-filter.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class WorkshopDetailsWhereUniqueInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopId?: bigint | number;

    @Field(() => [WorkshopDetailsWhereInput], {nullable:true})
    @Type(() => WorkshopDetailsWhereInput)
    AND?: Array<WorkshopDetailsWhereInput>;

    @Field(() => [WorkshopDetailsWhereInput], {nullable:true})
    @Type(() => WorkshopDetailsWhereInput)
    OR?: Array<WorkshopDetailsWhereInput>;

    @Field(() => [WorkshopDetailsWhereInput], {nullable:true})
    @Type(() => WorkshopDetailsWhereInput)
    NOT?: Array<WorkshopDetailsWhereInput>;

    @Field(() => DecimalNullableFilter, {nullable:true})
    @Type(() => DecimalNullableFilter)
    rating?: DecimalNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    workshopName?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    logoURL?: StringNullableFilter;

    @Field(() => EnumWorkshopDetailsStatusNullableFilter, {nullable:true})
    status?: EnumWorkshopDetailsStatusNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    NIP?: StringNullableFilter;

    @Field(() => WorkshopRelationFilter, {nullable:true})
    @Type(() => WorkshopRelationFilter)
    @ValidateNested()
    @Type(() => WorkshopRelationFilter)
    workshop?: WorkshopRelationFilter;
}