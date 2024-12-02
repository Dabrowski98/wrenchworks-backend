import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../../prisma/dto/big-int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../../prisma/dto/string-with-aggregates-filter.input';
import { EnumUserReportTypeWithAggregatesFilter } from '../../prisma/dto/enum-user-report-type-with-aggregates-filter.input';
import { EnumUserReportsReportedEntityTypeWithAggregatesFilter } from '../../prisma/dto/enum-user-reports-reported-entity-type-with-aggregates-filter.input';
import { EnumUserReportsStatusWithAggregatesFilter } from '../../prisma/dto/enum-user-reports-status-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../../prisma/dto/date-time-nullable-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserReportScalarWhereWithAggregatesInput {

    @Field(() => [UserReportScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserReportScalarWhereWithAggregatesInput>;

    @Field(() => [UserReportScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserReportScalarWhereWithAggregatesInput>;

    @Field(() => [UserReportScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserReportScalarWhereWithAggregatesInput>;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    reportId?: BigIntWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    userId?: BigIntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    reportText?: StringWithAggregatesFilter;

    @Field(() => EnumUserReportTypeWithAggregatesFilter, {nullable:true})
    reportType?: EnumUserReportTypeWithAggregatesFilter;

    @Field(() => EnumUserReportsReportedEntityTypeWithAggregatesFilter, {nullable:true})
    reportedEntityType?: EnumUserReportsReportedEntityTypeWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    reportedId?: BigIntWithAggregatesFilter;

    @Field(() => EnumUserReportsStatusWithAggregatesFilter, {nullable:true})
    status?: EnumUserReportsStatusWithAggregatesFilter;

    }