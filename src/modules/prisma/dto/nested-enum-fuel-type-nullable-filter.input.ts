import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FuelType } from './fuel-type.enum';

@InputType()
export class NestedEnumFuelTypeNullableFilter {

    @Field(() => FuelType, {nullable:true})
    equals?: keyof typeof FuelType;

    @Field(() => [FuelType], {nullable:true})
    in?: Array<keyof typeof FuelType>;

    @Field(() => [FuelType], {nullable:true})
    notIn?: Array<keyof typeof FuelType>;

    @Field(() => NestedEnumFuelTypeNullableFilter, {nullable:true})
    not?: NestedEnumFuelTypeNullableFilter;
}
