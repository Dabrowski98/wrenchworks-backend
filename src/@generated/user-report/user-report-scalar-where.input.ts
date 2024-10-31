import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumUserReportsReportedTypeFilter } from '../prisma/enum-user-reports-reported-type-filter.input';
import { EnumUserReportsStatusFilter } from '../prisma/enum-user-reports-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

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

    @Field(() => EnumUserReportsReportedTypeFilter, {nullable:true})
    reportedType?: EnumUserReportsReportedTypeFilter;

    @Field(() => BigIntFilter, {nullable:true})
    reportedId?: BigIntFilter;

    @Field(() => EnumUserReportsStatusFilter, {nullable:true})
    status?: EnumUserReportsStatusFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;
}
