import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRole } from './user-role.enum';
import { NestedEnumUserRoleNullableFilter } from './nested-enum-user-role-nullable-filter.input';

@InputType()
export class EnumUserRoleNullableFilter {

    @Field(() => UserRole, {nullable:true})
    equals?: keyof typeof UserRole;

    @Field(() => [UserRole], {nullable:true})
    in?: Array<keyof typeof UserRole>;

    @Field(() => [UserRole], {nullable:true})
    notIn?: Array<keyof typeof UserRole>;

    @Field(() => NestedEnumUserRoleNullableFilter, {nullable:true})
    not?: NestedEnumUserRoleNullableFilter;
}
