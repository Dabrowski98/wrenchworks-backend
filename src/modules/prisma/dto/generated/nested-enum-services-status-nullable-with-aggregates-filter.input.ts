import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServicesStatus } from './services-status.enum';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumServicesStatusNullableFilter } from './nested-enum-services-status-nullable-filter.input';

@InputType()
export class NestedEnumServicesStatusNullableWithAggregatesFilter {

    @Field(() => ServicesStatus, {nullable:true})
    equals?: keyof typeof ServicesStatus;

    @Field(() => [ServicesStatus], {nullable:true})
    in?: Array<keyof typeof ServicesStatus>;

    @Field(() => [ServicesStatus], {nullable:true})
    notIn?: Array<keyof typeof ServicesStatus>;

    @Field(() => NestedEnumServicesStatusNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumServicesStatusNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumServicesStatusNullableFilter, {nullable:true})
    _min?: NestedEnumServicesStatusNullableFilter;

    @Field(() => NestedEnumServicesStatusNullableFilter, {nullable:true})
    _max?: NestedEnumServicesStatusNullableFilter;
}
