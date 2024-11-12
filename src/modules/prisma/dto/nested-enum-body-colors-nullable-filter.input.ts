import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BodyColors } from './body-colors.enum';

@InputType()
export class NestedEnumBodyColorsNullableFilter {

    @Field(() => BodyColors, {nullable:true})
    equals?: keyof typeof BodyColors;

    @Field(() => [BodyColors], {nullable:true})
    in?: Array<keyof typeof BodyColors>;

    @Field(() => [BodyColors], {nullable:true})
    notIn?: Array<keyof typeof BodyColors>;

    @Field(() => NestedEnumBodyColorsNullableFilter, {nullable:true})
    not?: NestedEnumBodyColorsNullableFilter;
}
