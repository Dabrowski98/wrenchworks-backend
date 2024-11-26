import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreationSource } from './customer-creation-source.enum';

@InputType()
export class NestedEnumCustomerCreationSourceFilter {

    @Field(() => CustomerCreationSource, {nullable:true})
    equals?: keyof typeof CustomerCreationSource;

    @Field(() => [CustomerCreationSource], {nullable:true})
    in?: Array<keyof typeof CustomerCreationSource>;

    @Field(() => [CustomerCreationSource], {nullable:true})
    notIn?: Array<keyof typeof CustomerCreationSource>;

    @Field(() => NestedEnumCustomerCreationSourceFilter, {nullable:true})
    not?: NestedEnumCustomerCreationSourceFilter;
}
