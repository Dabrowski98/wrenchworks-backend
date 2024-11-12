import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BodyColors } from './body-colors.enum';
import { NestedEnumBodyColorsNullableWithAggregatesFilter } from './nested-enum-body-colors-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumBodyColorsNullableFilter } from './nested-enum-body-colors-nullable-filter.input';

@InputType()
export class EnumBodyColorsNullableWithAggregatesFilter {

    @Field(() => BodyColors, {nullable:true})
    equals?: keyof typeof BodyColors;

    @Field(() => [BodyColors], {nullable:true})
    in?: Array<keyof typeof BodyColors>;

    @Field(() => [BodyColors], {nullable:true})
    notIn?: Array<keyof typeof BodyColors>;

    @Field(() => NestedEnumBodyColorsNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumBodyColorsNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumBodyColorsNullableFilter, {nullable:true})
    _min?: NestedEnumBodyColorsNullableFilter;

    @Field(() => NestedEnumBodyColorsNullableFilter, {nullable:true})
    _max?: NestedEnumBodyColorsNullableFilter;
}
