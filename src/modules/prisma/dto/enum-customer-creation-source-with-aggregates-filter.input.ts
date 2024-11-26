import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreationSource } from './customer-creation-source.enum';
import { NestedEnumCustomerCreationSourceWithAggregatesFilter } from './nested-enum-customer-creation-source-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumCustomerCreationSourceFilter } from './nested-enum-customer-creation-source-filter.input';

@InputType()
export class EnumCustomerCreationSourceWithAggregatesFilter {

    @Field(() => CustomerCreationSource, {nullable:true})
    equals?: keyof typeof CustomerCreationSource;

    @Field(() => [CustomerCreationSource], {nullable:true})
    in?: Array<keyof typeof CustomerCreationSource>;

    @Field(() => [CustomerCreationSource], {nullable:true})
    notIn?: Array<keyof typeof CustomerCreationSource>;

    @Field(() => NestedEnumCustomerCreationSourceWithAggregatesFilter, {nullable:true})
    not?: NestedEnumCustomerCreationSourceWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumCustomerCreationSourceFilter, {nullable:true})
    _min?: NestedEnumCustomerCreationSourceFilter;

    @Field(() => NestedEnumCustomerCreationSourceFilter, {nullable:true})
    _max?: NestedEnumCustomerCreationSourceFilter;
}
