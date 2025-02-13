import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { BigIntWithAggregatesFilter } from '../../prisma/dto/big-int-with-aggregates-filter.input';
import { DecimalNullableWithAggregatesFilter } from '../../prisma/dto/decimal-nullable-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../../prisma/dto/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../../prisma/dto/string-nullable-with-aggregates-filter.input';
import { EnumWorkshopDetailsStatusNullableWithAggregatesFilter } from '../../prisma/dto/enum-workshop-details-status-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../../prisma/dto/date-time-nullable-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';
import { BigIntNullableWithAggregatesFilter } from '../../prisma/dto/big-int-nullable-with-aggregates-filter.input';

@InputType()
export class WorkshopDetailsScalarWhereWithAggregatesInput {

    @Field(() => [WorkshopDetailsScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => WorkshopDetailsScalarWhereWithAggregatesInput)
    AND?: Array<WorkshopDetailsScalarWhereWithAggregatesInput>;

    @Field(() => [WorkshopDetailsScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => WorkshopDetailsScalarWhereWithAggregatesInput)
    OR?: Array<WorkshopDetailsScalarWhereWithAggregatesInput>;

    @Field(() => [WorkshopDetailsScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => WorkshopDetailsScalarWhereWithAggregatesInput)
    NOT?: Array<WorkshopDetailsScalarWhereWithAggregatesInput>;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    workshopId?: BigIntWithAggregatesFilter;

    @Field(() => DecimalNullableWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalNullableWithAggregatesFilter)
    rating?: DecimalNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    workshopName?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    logoURL?: StringNullableWithAggregatesFilter;

    @Field(() => EnumWorkshopDetailsStatusNullableWithAggregatesFilter, {nullable:true})
    status?: EnumWorkshopDetailsStatusNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    NIP?: StringNullableWithAggregatesFilter;

    @HideField()
    updatedAt?: DateTimeNullableWithAggregatesFilter;

    @HideField()
    updatedBy?: BigIntNullableWithAggregatesFilter;

    @HideField()
    deletedAt?: DateTimeNullableWithAggregatesFilter;
}
