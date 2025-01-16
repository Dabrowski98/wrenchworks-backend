import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserReportStatus } from './user-report-status.enum';

@InputType()
export class NestedEnumUserReportStatusFilter {

    @Field(() => UserReportStatus, {nullable:true})
    equals?: keyof typeof UserReportStatus;

    @Field(() => [UserReportStatus], {nullable:true})
    in?: Array<keyof typeof UserReportStatus>;

    @Field(() => [UserReportStatus], {nullable:true})
    notIn?: Array<keyof typeof UserReportStatus>;

    @Field(() => NestedEnumUserReportStatusFilter, {nullable:true})
    not?: NestedEnumUserReportStatusFilter;
}
