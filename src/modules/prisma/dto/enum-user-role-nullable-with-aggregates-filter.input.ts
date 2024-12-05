import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRole } from './user-role.enum';
import { NestedEnumUserRoleNullableWithAggregatesFilter } from './nested-enum-user-role-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumUserRoleNullableFilter } from './nested-enum-user-role-nullable-filter.input';

@InputType()
export class EnumUserRoleNullableWithAggregatesFilter {

    @Field(() => UserRole, {nullable:true})
    equals?: keyof typeof UserRole;

    @Field(() => [UserRole], {nullable:true})
    in?: Array<keyof typeof UserRole>;

    @Field(() => [UserRole], {nullable:true})
    notIn?: Array<keyof typeof UserRole>;

    @Field(() => NestedEnumUserRoleNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumUserRoleNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumUserRoleNullableFilter, {nullable:true})
    _min?: NestedEnumUserRoleNullableFilter;

    @Field(() => NestedEnumUserRoleNullableFilter, {nullable:true})
    _max?: NestedEnumUserRoleNullableFilter;
}
