import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserReportsStatus } from './user-reports-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumUserReportsStatusFilter } from './nested-enum-user-reports-status-filter.input';

@InputType()
export class NestedEnumUserReportsStatusWithAggregatesFilter {

    @Field(() => UserReportsStatus, {nullable:true})
    equals?: keyof typeof UserReportsStatus;

    @Field(() => [UserReportsStatus], {nullable:true})
    in?: Array<keyof typeof UserReportsStatus>;

    @Field(() => [UserReportsStatus], {nullable:true})
    notIn?: Array<keyof typeof UserReportsStatus>;

    @Field(() => NestedEnumUserReportsStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumUserReportsStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumUserReportsStatusFilter, {nullable:true})
    _min?: NestedEnumUserReportsStatusFilter;

    @Field(() => NestedEnumUserReportsStatusFilter, {nullable:true})
    _max?: NestedEnumUserReportsStatusFilter;
}
