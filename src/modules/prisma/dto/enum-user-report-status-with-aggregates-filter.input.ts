import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserReportStatus } from './user-report-status.enum';
import { NestedEnumUserReportStatusWithAggregatesFilter } from './nested-enum-user-report-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumUserReportStatusFilter } from './nested-enum-user-report-status-filter.input';

@InputType()
export class EnumUserReportStatusWithAggregatesFilter {

    @Field(() => UserReportStatus, {nullable:true})
    equals?: keyof typeof UserReportStatus;

    @Field(() => [UserReportStatus], {nullable:true})
    in?: Array<keyof typeof UserReportStatus>;

    @Field(() => [UserReportStatus], {nullable:true})
    notIn?: Array<keyof typeof UserReportStatus>;

    @Field(() => NestedEnumUserReportStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumUserReportStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumUserReportStatusFilter, {nullable:true})
    _min?: NestedEnumUserReportStatusFilter;

    @Field(() => NestedEnumUserReportStatusFilter, {nullable:true})
    _max?: NestedEnumUserReportStatusFilter;
}
