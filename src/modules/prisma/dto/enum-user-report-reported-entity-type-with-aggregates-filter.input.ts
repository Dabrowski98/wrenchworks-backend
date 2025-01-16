import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserReportReportedEntityType } from './user-report-reported-entity-type.enum';
import { NestedEnumUserReportReportedEntityTypeWithAggregatesFilter } from './nested-enum-user-report-reported-entity-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumUserReportReportedEntityTypeFilter } from './nested-enum-user-report-reported-entity-type-filter.input';

@InputType()
export class EnumUserReportReportedEntityTypeWithAggregatesFilter {

    @Field(() => UserReportReportedEntityType, {nullable:true})
    equals?: keyof typeof UserReportReportedEntityType;

    @Field(() => [UserReportReportedEntityType], {nullable:true})
    in?: Array<keyof typeof UserReportReportedEntityType>;

    @Field(() => [UserReportReportedEntityType], {nullable:true})
    notIn?: Array<keyof typeof UserReportReportedEntityType>;

    @Field(() => NestedEnumUserReportReportedEntityTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumUserReportReportedEntityTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumUserReportReportedEntityTypeFilter, {nullable:true})
    _min?: NestedEnumUserReportReportedEntityTypeFilter;

    @Field(() => NestedEnumUserReportReportedEntityTypeFilter, {nullable:true})
    _max?: NestedEnumUserReportReportedEntityTypeFilter;
}
