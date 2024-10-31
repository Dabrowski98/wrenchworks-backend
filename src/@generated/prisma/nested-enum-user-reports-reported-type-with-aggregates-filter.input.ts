import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserReportsReportedType } from './user-reports-reported-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumUserReportsReportedTypeFilter } from './nested-enum-user-reports-reported-type-filter.input';

@InputType()
export class NestedEnumUserReportsReportedTypeWithAggregatesFilter {

    @Field(() => UserReportsReportedType, {nullable:true})
    equals?: keyof typeof UserReportsReportedType;

    @Field(() => [UserReportsReportedType], {nullable:true})
    in?: Array<keyof typeof UserReportsReportedType>;

    @Field(() => [UserReportsReportedType], {nullable:true})
    notIn?: Array<keyof typeof UserReportsReportedType>;

    @Field(() => NestedEnumUserReportsReportedTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumUserReportsReportedTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumUserReportsReportedTypeFilter, {nullable:true})
    _min?: NestedEnumUserReportsReportedTypeFilter;

    @Field(() => NestedEnumUserReportsReportedTypeFilter, {nullable:true})
    _max?: NestedEnumUserReportsReportedTypeFilter;
}
