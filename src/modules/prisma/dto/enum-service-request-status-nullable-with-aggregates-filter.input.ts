import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestStatus } from './service-request-status.enum';
import { NestedEnumServiceRequestStatusNullableWithAggregatesFilter } from './nested-enum-service-request-status-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumServiceRequestStatusNullableFilter } from './nested-enum-service-request-status-nullable-filter.input';

@InputType()
export class EnumServiceRequestStatusNullableWithAggregatesFilter {

    @Field(() => ServiceRequestStatus, {nullable:true})
    equals?: keyof typeof ServiceRequestStatus;

    @Field(() => [ServiceRequestStatus], {nullable:true})
    in?: Array<keyof typeof ServiceRequestStatus>;

    @Field(() => [ServiceRequestStatus], {nullable:true})
    notIn?: Array<keyof typeof ServiceRequestStatus>;

    @Field(() => NestedEnumServiceRequestStatusNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumServiceRequestStatusNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumServiceRequestStatusNullableFilter, {nullable:true})
    _min?: NestedEnumServiceRequestStatusNullableFilter;

    @Field(() => NestedEnumServiceRequestStatusNullableFilter, {nullable:true})
    _max?: NestedEnumServiceRequestStatusNullableFilter;
}
