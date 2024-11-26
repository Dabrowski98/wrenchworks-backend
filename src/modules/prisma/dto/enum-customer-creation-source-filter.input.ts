import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreationSource } from './customer-creation-source.enum';
import { NestedEnumCustomerCreationSourceFilter } from './nested-enum-customer-creation-source-filter.input';

@InputType()
export class EnumCustomerCreationSourceFilter {

    @Field(() => CustomerCreationSource, {nullable:true})
    equals?: keyof typeof CustomerCreationSource;

    @Field(() => [CustomerCreationSource], {nullable:true})
    in?: Array<keyof typeof CustomerCreationSource>;

    @Field(() => [CustomerCreationSource], {nullable:true})
    notIn?: Array<keyof typeof CustomerCreationSource>;

    @Field(() => NestedEnumCustomerCreationSourceFilter, {nullable:true})
    not?: NestedEnumCustomerCreationSourceFilter;
}
