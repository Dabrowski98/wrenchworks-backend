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
import { BigIntNullableFilter } from '../../prisma/dto/big-int-nullable-filter.input';
import { UserRelationFilter } from '../../user/dto/user-relation-filter.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

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

    @Field(() => EnumUserReportTypeFilter, {nullable:true})
    reportType?: EnumUserReportTypeFilter;

    @Field(() => EnumUserReportReportedEntityTypeFilter, {nullable:true})
    reportedEntityType?: EnumUserReportReportedEntityTypeFilter;

    @Field(() => BigIntFilter, {nullable:true})
    reportedId?: BigIntFilter;

    @Field(() => EnumUserReportStatusFilter, {nullable:true})
    status?: EnumUserReportStatusFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeNullableFilter;

    @HideField()
    updatedBy?: BigIntNullableFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    @Type(() => UserRelationFilter)
    @ValidateNested()
    user?: UserRelationFilter;
}
