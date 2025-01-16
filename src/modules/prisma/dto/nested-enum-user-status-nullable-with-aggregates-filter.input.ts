import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserStatus } from './user-status.enum';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumUserStatusNullableFilter } from './nested-enum-user-status-nullable-filter.input';

@InputType()
export class NestedEnumUserStatusNullableWithAggregatesFilter {

    @Field(() => UserStatus, {nullable:true})
    equals?: keyof typeof UserStatus;

    @Field(() => [UserStatus], {nullable:true})
    in?: Array<keyof typeof UserStatus>;

    @Field(() => [UserStatus], {nullable:true})
    notIn?: Array<keyof typeof UserStatus>;

    @Field(() => NestedEnumUserStatusNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumUserStatusNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumUserStatusNullableFilter, {nullable:true})
    _min?: NestedEnumUserStatusNullableFilter;

    @Field(() => NestedEnumUserStatusNullableFilter, {nullable:true})
    _max?: NestedEnumUserStatusNullableFilter;
}
