import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../../prisma/dto/big-int-with-aggregates-filter.input';
import { BigIntNullableWithAggregatesFilter } from '../../prisma/dto/big-int-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../../prisma/dto/string-nullable-with-aggregates-filter.input';
import { BoolNullableWithAggregatesFilter } from '../../prisma/dto/bool-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../../prisma/dto/date-time-nullable-with-aggregates-filter.input';

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
    personId?: BigIntWithAggregatesFilter;

    @Field(() => BigIntNullableWithAggregatesFilter, {nullable:true})
    addressId?: BigIntNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    email?: StringNullableWithAggregatesFilter;

    @Field(() => BoolNullableWithAggregatesFilter, {nullable:true})
    isVerified?: BoolNullableWithAggregatesFilter;

    @Field(() => BoolNullableWithAggregatesFilter, {nullable:true})
    isManagingWork?: BoolNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    deletedAt?: DateTimeNullableWithAggregatesFilter;
}
