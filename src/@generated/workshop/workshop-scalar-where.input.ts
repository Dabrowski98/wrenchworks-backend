import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class WorkshopScalarWhereInput {

    @Field(() => [WorkshopScalarWhereInput], {nullable:true})
    AND?: Array<WorkshopScalarWhereInput>;

    @Field(() => [WorkshopScalarWhereInput], {nullable:true})
    OR?: Array<WorkshopScalarWhereInput>;

    @Field(() => [WorkshopScalarWhereInput], {nullable:true})
    NOT?: Array<WorkshopScalarWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    workshopId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    personId?: BigIntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    email?: StringNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    isVerified?: BoolNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    isManagingWork?: BoolNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: DateTimeNullableFilter;
}
