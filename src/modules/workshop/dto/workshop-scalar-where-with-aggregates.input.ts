import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../../prisma/dto/big-int-with-aggregates-filter.input';
import { BigIntNullableWithAggregatesFilter } from '../../prisma/dto/big-int-nullable-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../../prisma/dto/string-with-aggregates-filter.input';
import { BoolNullableWithAggregatesFilter } from '../../prisma/dto/bool-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../../prisma/dto/date-time-nullable-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class WorkshopScalarWhereWithAggregatesInput {

    @Field(() => [WorkshopScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<WorkshopScalarWhereWithAggregatesInput>;

    @Field(() => [WorkshopScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<WorkshopScalarWhereWithAggregatesInput>;

    @Field(() => [WorkshopScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<WorkshopScalarWhereWithAggregatesInput>;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    workshopId?: BigIntWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    ownerId?: BigIntWithAggregatesFilter;

    @Field(() => BigIntNullableWithAggregatesFilter, {nullable:true})
    addressId?: BigIntNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    telephoneNumber?: StringWithAggregatesFilter;

    @Field(() => BoolNullableWithAggregatesFilter, {nullable:true})
    isVerified?: BoolNullableWithAggregatesFilter;

    @Field(() => BoolNullableWithAggregatesFilter, {nullable:true})
    isManagingWork?: BoolNullableWithAggregatesFilter;

    @Field(() => BoolNullableWithAggregatesFilter, {nullable:true})
    isOfferingService?: BoolNullableWithAggregatesFilter;

    }