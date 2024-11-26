import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserReportsReportedEntityType } from './user-reports-reported-entity-type.enum';
import { NestedEnumUserReportsReportedEntityTypeWithAggregatesFilter } from './nested-enum-user-reports-reported-entity-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumUserReportsReportedEntityTypeFilter } from './nested-enum-user-reports-reported-entity-type-filter.input';

@InputType()
export class EnumUserReportsReportedEntityTypeWithAggregatesFilter {

    @Field(() => UserReportsReportedEntityType, {nullable:true})
    equals?: keyof typeof UserReportsReportedEntityType;

    @Field(() => [UserReportsReportedEntityType], {nullable:true})
    in?: Array<keyof typeof UserReportsReportedEntityType>;

    @Field(() => [UserReportsReportedEntityType], {nullable:true})
    notIn?: Array<keyof typeof UserReportsReportedEntityType>;

    @Field(() => NestedEnumUserReportsReportedEntityTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumUserReportsReportedEntityTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumUserReportsReportedEntityTypeFilter, {nullable:true})
    _min?: NestedEnumUserReportsReportedEntityTypeFilter;

    @Field(() => NestedEnumUserReportsReportedEntityTypeFilter, {nullable:true})
    _max?: NestedEnumUserReportsReportedEntityTypeFilter;
}
