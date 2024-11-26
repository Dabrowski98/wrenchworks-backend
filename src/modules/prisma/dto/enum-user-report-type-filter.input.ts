import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserReportType } from './user-report-type.enum';
import { NestedEnumUserReportTypeFilter } from './nested-enum-user-report-type-filter.input';

@InputType()
export class EnumUserReportTypeFilter {

    @Field(() => UserReportType, {nullable:true})
    equals?: keyof typeof UserReportType;

    @Field(() => [UserReportType], {nullable:true})
    in?: Array<keyof typeof UserReportType>;

    @Field(() => [UserReportType], {nullable:true})
    notIn?: Array<keyof typeof UserReportType>;

    @Field(() => NestedEnumUserReportTypeFilter, {nullable:true})
    not?: NestedEnumUserReportTypeFilter;
}
