import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { StringFilter } from '../../prisma/dto/string-filter.input';
import { EnumUserReportTypeFilter } from '../../prisma/dto/enum-user-report-type-filter.input';
import { EnumUserReportReportedEntityTypeFilter } from '../../prisma/dto/enum-user-report-reported-entity-type-filter.input';
import { EnumUserReportStatusFilter } from '../../prisma/dto/enum-user-report-status-filter.input';
import { DateTimeFilter } from '../../prisma/dto/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeNullableFilter } from '../../prisma/dto/date-time-nullable-filter.input';

@InputType()
export class UserReportScalarWhereInput {

    @Field(() => [UserReportScalarWhereInput], {nullable:true})
    AND?: Array<UserReportScalarWhereInput>;

    @Field(() => [UserReportScalarWhereInput], {nullable:true})
    OR?: Array<UserReportScalarWhereInput>;

    @Field(() => [UserReportScalarWhereInput], {nullable:true})
    NOT?: Array<UserReportScalarWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    reportId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    userId?: BigIntFilter;

    @Field(() => StringFilter, {nullable:true})
    reportText?: StringFilter;

    @Field(() => EnumUserReportTypeFilter, {nullable:true})
    reportType?: EnumUserReportTypeFilter;

    @Field(() => EnumUserReportReportedEntityTypeFilter, {nullable:true})
    reportedEntityType?: EnumUserReportReportedEntityTypeFilter;

    @Field(() => BigIntFilter, {nullable:true})
    reportedId?: BigIntFilter;

    @Field(() => EnumUserReportStatusFilter, {nullable:true})
    status?: EnumUserReportStatusFilter;

    }