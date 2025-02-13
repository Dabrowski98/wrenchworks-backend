import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../../prisma/dto/big-int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../../prisma/dto/string-with-aggregates-filter.input';
import { EnumUserReportTypeWithAggregatesFilter } from '../../prisma/dto/enum-user-report-type-with-aggregates-filter.input';
import { EnumUserReportReportedEntityTypeWithAggregatesFilter } from '../../prisma/dto/enum-user-report-reported-entity-type-with-aggregates-filter.input';
import { EnumUserReportStatusWithAggregatesFilter } from '../../prisma/dto/enum-user-report-status-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../../prisma/dto/date-time-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeNullableWithAggregatesFilter } from '../../prisma/dto/date-time-nullable-with-aggregates-filter.input';
import { BigIntNullableWithAggregatesFilter } from '../../prisma/dto/big-int-nullable-with-aggregates-filter.input';

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

    @Field(() => EnumUserReportReportedEntityTypeWithAggregatesFilter, {nullable:true})
    reportedEntityType?: EnumUserReportReportedEntityTypeWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    reportedId?: BigIntWithAggregatesFilter;

    @Field(() => EnumUserReportStatusWithAggregatesFilter, {nullable:true})
    status?: EnumUserReportStatusWithAggregatesFilter;

    @HideField()
    createdAt?: DateTimeWithAggregatesFilter;

    @HideField()
    updatedAt?: DateTimeNullableWithAggregatesFilter;

    @HideField()
    updatedBy?: BigIntNullableWithAggregatesFilter;
}
