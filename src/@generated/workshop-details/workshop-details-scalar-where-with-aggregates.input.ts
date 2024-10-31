import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { BigIntWithAggregatesFilter } from '../prisma/big-int-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumWorkshopsDetailsStatusNullableWithAggregatesFilter } from '../prisma/enum-workshops-details-status-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

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

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    rating?: DecimalWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    workshopName?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    telephoneNumber?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    logoURL?: StringNullableWithAggregatesFilter;

    @Field(() => EnumWorkshopsDetailsStatusNullableWithAggregatesFilter, {nullable:true})
    status?: EnumWorkshopsDetailsStatusNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    NIP?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    deletedAt?: DateTimeNullableWithAggregatesFilter;
}
