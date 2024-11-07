import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestsStatus } from './service-requests-status.enum';
import { NestedEnumServiceRequestsStatusNullableWithAggregatesFilter } from './nested-enum-service-requests-status-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumServiceRequestsStatusNullableFilter } from './nested-enum-service-requests-status-nullable-filter.input';

@InputType()
export class EnumServiceRequestsStatusNullableWithAggregatesFilter {

    @Field(() => ServiceRequestsStatus, {nullable:true})
    equals?: keyof typeof ServiceRequestsStatus;

    @Field(() => [ServiceRequestsStatus], {nullable:true})
    in?: Array<keyof typeof ServiceRequestsStatus>;

    @Field(() => [ServiceRequestsStatus], {nullable:true})
    notIn?: Array<keyof typeof ServiceRequestsStatus>;

    @Field(() => NestedEnumServiceRequestsStatusNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumServiceRequestsStatusNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumServiceRequestsStatusNullableFilter, {nullable:true})
    _min?: NestedEnumServiceRequestsStatusNullableFilter;

    @Field(() => NestedEnumServiceRequestsStatusNullableFilter, {nullable:true})
    _max?: NestedEnumServiceRequestsStatusNullableFilter;
}
