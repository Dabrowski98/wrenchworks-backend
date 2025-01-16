import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserStatus } from './user-status.enum';
import { NestedEnumUserStatusNullableFilter } from './nested-enum-user-status-nullable-filter.input';

@InputType()
export class EnumUserStatusNullableFilter {

    @Field(() => UserStatus, {nullable:true})
    equals?: keyof typeof UserStatus;

    @Field(() => [UserStatus], {nullable:true})
    in?: Array<keyof typeof UserStatus>;

    @Field(() => [UserStatus], {nullable:true})
    notIn?: Array<keyof typeof UserStatus>;

    @Field(() => NestedEnumUserStatusNullableFilter, {nullable:true})
    not?: NestedEnumUserStatusNullableFilter;
}
