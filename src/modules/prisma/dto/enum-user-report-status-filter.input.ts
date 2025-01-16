import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserReportStatus } from './user-report-status.enum';
import { NestedEnumUserReportStatusFilter } from './nested-enum-user-report-status-filter.input';

@InputType()
export class EnumUserReportStatusFilter {

    @Field(() => UserReportStatus, {nullable:true})
    equals?: keyof typeof UserReportStatus;

    @Field(() => [UserReportStatus], {nullable:true})
    in?: Array<keyof typeof UserReportStatus>;

    @Field(() => [UserReportStatus], {nullable:true})
    notIn?: Array<keyof typeof UserReportStatus>;

    @Field(() => NestedEnumUserReportStatusFilter, {nullable:true})
    not?: NestedEnumUserReportStatusFilter;
}
