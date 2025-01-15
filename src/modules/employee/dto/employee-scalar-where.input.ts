import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { BigIntNullableFilter } from '../../prisma/dto/big-int-nullable-filter.input';
import { StringNullableFilter } from '../../prisma/dto/string-nullable-filter.input';
import { StringFilter } from '../../prisma/dto/string-filter.input';
import { BoolFilter } from '../../prisma/dto/bool-filter.input';
import { DateTimeFilter } from '../../prisma/dto/date-time-filter.input';
import { DateTimeNullableFilter } from '../../prisma/dto/date-time-nullable-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class EmployeeScalarWhereInput {

    @Field(() => [EmployeeScalarWhereInput], {nullable:true})
    AND?: Array<EmployeeScalarWhereInput>;

    @Field(() => [EmployeeScalarWhereInput], {nullable:true})
    OR?: Array<EmployeeScalarWhereInput>;

    @Field(() => [EmployeeScalarWhereInput], {nullable:true})
    NOT?: Array<EmployeeScalarWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    employeeId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    workshopId?: BigIntFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    userId?: BigIntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    nickname?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    login?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    refreshToken?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    status?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    joinedAt?: DateTimeFilter;

    }