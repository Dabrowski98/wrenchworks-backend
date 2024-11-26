import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserReportType } from './user-report-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumUserReportTypeFilter } from './nested-enum-user-report-type-filter.input';

@InputType()
export class NestedEnumUserReportTypeWithAggregatesFilter {

    @Field(() => UserReportType, {nullable:true})
    equals?: keyof typeof UserReportType;

    @Field(() => [UserReportType], {nullable:true})
    in?: Array<keyof typeof UserReportType>;

    @Field(() => [UserReportType], {nullable:true})
    notIn?: Array<keyof typeof UserReportType>;

    @Field(() => NestedEnumUserReportTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumUserReportTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumUserReportTypeFilter, {nullable:true})
    _min?: NestedEnumUserReportTypeFilter;

    @Field(() => NestedEnumUserReportTypeFilter, {nullable:true})
    _max?: NestedEnumUserReportTypeFilter;
}
