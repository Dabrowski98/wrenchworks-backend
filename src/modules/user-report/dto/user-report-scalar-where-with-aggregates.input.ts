import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../../prisma/dto/big-int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../../prisma/dto/string-with-aggregates-filter.input';
import { EnumUserReportsReportedTypeWithAggregatesFilter } from '../../prisma/dto/enum-user-reports-reported-type-with-aggregates-filter.input';
import { EnumUserReportsStatusWithAggregatesFilter } from '../../prisma/dto/enum-user-reports-status-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../../prisma/dto/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../../prisma/dto/date-time-nullable-with-aggregates-filter.input';

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

    @Field(() => EnumUserReportsReportedTypeWithAggregatesFilter, {nullable:true})
    reportedType?: EnumUserReportsReportedTypeWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    reportedId?: BigIntWithAggregatesFilter;

    @Field(() => EnumUserReportsStatusWithAggregatesFilter, {nullable:true})
    status?: EnumUserReportsStatusWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeNullableWithAggregatesFilter;
}
