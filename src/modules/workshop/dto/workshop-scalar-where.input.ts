import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { BigIntNullableFilter } from '../../prisma/dto/big-int-nullable-filter.input';
import { StringNullableFilter } from '../../prisma/dto/string-nullable-filter.input';
import { BoolNullableFilter } from '../../prisma/dto/bool-nullable-filter.input';
import { DateTimeNullableFilter } from '../../prisma/dto/date-time-nullable-filter.input';

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

    @Field(() => BigIntNullableFilter, {nullable:true})
    addressId?: BigIntNullableFilter;

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
