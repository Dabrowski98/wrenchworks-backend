import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { UserReportWhereInput } from './user-report-where.input';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { StringFilter } from '../../prisma/dto/string-filter.input';
import { EnumUserReportTypeFilter } from '../../prisma/dto/enum-user-report-type-filter.input';
import { EnumUserReportsReportedEntityTypeFilter } from '../../prisma/dto/enum-user-reports-reported-entity-type-filter.input';
import { EnumUserReportsStatusFilter } from '../../prisma/dto/enum-user-reports-status-filter.input';
import { DateTimeNullableFilter } from '../../prisma/dto/date-time-nullable-filter.input';
import { HideField } from 'nestjs-graphql';
import { UserRelationFilter } from '../../user/dto/user-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class UserReportWhereUniqueInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    reportId?: bigint | number;

    @Field(() => [UserReportWhereInput], {nullable:true})
    AND?: Array<UserReportWhereInput>;

    @Field(() => [UserReportWhereInput], {nullable:true})
    OR?: Array<UserReportWhereInput>;

    @Field(() => [UserReportWhereInput], {nullable:true})
    NOT?: Array<UserReportWhereInput>;

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

    @Field(() => DateTimeNullableFilter, {nullable:true})
    @HideField()
    createdAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    @HideField()
    updatedAt?: DateTimeNullableFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    @Type(() => UserRelationFilter)
    user?: UserRelationFilter;
}
