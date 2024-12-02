import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { BigIntNullableFilter } from '../../prisma/dto/big-int-nullable-filter.input';
import { StringFilter } from '../../prisma/dto/string-filter.input';
import { BoolNullableFilter } from '../../prisma/dto/bool-nullable-filter.input';
import { DateTimeNullableFilter } from '../../prisma/dto/date-time-nullable-filter.input';
import { HideField } from '@nestjs/graphql';

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
    ownerId?: BigIntFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    addressId?: BigIntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    telephoneNumber?: StringFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    isVerified?: BoolNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    isManagingWork?: BoolNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    isOfferingService?: BoolNullableFilter;

    }