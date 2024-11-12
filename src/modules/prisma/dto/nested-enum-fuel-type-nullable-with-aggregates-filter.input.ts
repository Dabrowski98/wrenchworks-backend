import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FuelType } from './fuel-type.enum';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumFuelTypeNullableFilter } from './nested-enum-fuel-type-nullable-filter.input';

@InputType()
export class NestedEnumFuelTypeNullableWithAggregatesFilter {

    @Field(() => FuelType, {nullable:true})
    equals?: keyof typeof FuelType;

    @Field(() => [FuelType], {nullable:true})
    in?: Array<keyof typeof FuelType>;

    @Field(() => [FuelType], {nullable:true})
    notIn?: Array<keyof typeof FuelType>;

    @Field(() => NestedEnumFuelTypeNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumFuelTypeNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumFuelTypeNullableFilter, {nullable:true})
    _min?: NestedEnumFuelTypeNullableFilter;

    @Field(() => NestedEnumFuelTypeNullableFilter, {nullable:true})
    _max?: NestedEnumFuelTypeNullableFilter;
}
