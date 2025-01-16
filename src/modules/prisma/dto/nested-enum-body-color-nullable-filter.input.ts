import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BodyColor } from './body-color.enum';

@InputType()
export class NestedEnumBodyColorNullableFilter {

    @Field(() => BodyColor, {nullable:true})
    equals?: keyof typeof BodyColor;

    @Field(() => [BodyColor], {nullable:true})
    in?: Array<keyof typeof BodyColor>;

    @Field(() => [BodyColor], {nullable:true})
    notIn?: Array<keyof typeof BodyColor>;

    @Field(() => NestedEnumBodyColorNullableFilter, {nullable:true})
    not?: NestedEnumBodyColorNullableFilter;
}
