import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BodyColor } from './body-color.enum';
import { NestedEnumBodyColorNullableWithAggregatesFilter } from './nested-enum-body-color-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumBodyColorNullableFilter } from './nested-enum-body-color-nullable-filter.input';

@InputType()
export class EnumBodyColorNullableWithAggregatesFilter {

    @Field(() => BodyColor, {nullable:true})
    equals?: keyof typeof BodyColor;

    @Field(() => [BodyColor], {nullable:true})
    in?: Array<keyof typeof BodyColor>;

    @Field(() => [BodyColor], {nullable:true})
    notIn?: Array<keyof typeof BodyColor>;

    @Field(() => NestedEnumBodyColorNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumBodyColorNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumBodyColorNullableFilter, {nullable:true})
    _min?: NestedEnumBodyColorNullableFilter;

    @Field(() => NestedEnumBodyColorNullableFilter, {nullable:true})
    _max?: NestedEnumBodyColorNullableFilter;
}
