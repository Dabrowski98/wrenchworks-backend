import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceStatus } from './service-status.enum';
import { NestedEnumServiceStatusNullableWithAggregatesFilter } from './nested-enum-service-status-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumServiceStatusNullableFilter } from './nested-enum-service-status-nullable-filter.input';

@InputType()
export class EnumServiceStatusNullableWithAggregatesFilter {

    @Field(() => ServiceStatus, {nullable:true})
    equals?: keyof typeof ServiceStatus;

    @Field(() => [ServiceStatus], {nullable:true})
    in?: Array<keyof typeof ServiceStatus>;

    @Field(() => [ServiceStatus], {nullable:true})
    notIn?: Array<keyof typeof ServiceStatus>;

    @Field(() => NestedEnumServiceStatusNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumServiceStatusNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumServiceStatusNullableFilter, {nullable:true})
    _min?: NestedEnumServiceStatusNullableFilter;

    @Field(() => NestedEnumServiceStatusNullableFilter, {nullable:true})
    _max?: NestedEnumServiceStatusNullableFilter;
}
