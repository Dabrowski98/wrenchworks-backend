import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { StringFilter } from '../../prisma/dto/string-filter.input';
import { EnumUserReportsReportedTypeFilter } from '../../prisma/dto/enum-user-reports-reported-type-filter.input';
import { EnumUserReportsStatusFilter } from '../../prisma/dto/enum-user-reports-status-filter.input';
import { DateTimeFilter } from '../../prisma/dto/date-time-filter.input';
import { DateTimeNullableFilter } from '../../prisma/dto/date-time-nullable-filter.input';
import { UserRelationFilter } from '../../user/dto/user-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class UserReportWhereInput {

    @Field(() => [UserReportWhereInput], {nullable:true})
    AND?: Array<UserReportWhereInput>;

    @Field(() => [UserReportWhereInput], {nullable:true})
    OR?: Array<UserReportWhereInput>;

    @Field(() => [UserReportWhereInput], {nullable:true})
    NOT?: Array<UserReportWhereInput>;

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

    @Field(() => UserRelationFilter, {nullable:true})
    @Type(() => UserRelationFilter)
    user?: UserRelationFilter;
}
