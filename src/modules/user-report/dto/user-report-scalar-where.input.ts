import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { StringFilter } from '../../prisma/dto/string-filter.input';
import { EnumUserReportTypeFilter } from '../../prisma/dto/enum-user-report-type-filter.input';
import { EnumUserReportsReportedEntityTypeFilter } from '../../prisma/dto/enum-user-reports-reported-entity-type-filter.input';
import { EnumUserReportsStatusFilter } from '../../prisma/dto/enum-user-reports-status-filter.input';
import { DateTimeNullableFilter } from '../../prisma/dto/date-time-nullable-filter.input';
import { HideField } from '@nestjs/graphql';

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

    @Field(() => EnumUserReportsReportedEntityTypeFilter, {nullable:true})
    reportedEntityType?: EnumUserReportsReportedEntityTypeFilter;

    @Field(() => BigIntFilter, {nullable:true})
    reportedId?: BigIntFilter;

    @Field(() => EnumUserReportsStatusFilter, {nullable:true})
    status?: EnumUserReportsStatusFilter;

    @HideField()
    createdAt?: DateTimeNullableFilter;

    @HideField()
    updatedAt?: DateTimeNullableFilter;
}
