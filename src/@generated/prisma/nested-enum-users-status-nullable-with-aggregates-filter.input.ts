import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersStatus } from './users-status.enum';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumUsersStatusNullableFilter } from './nested-enum-users-status-nullable-filter.input';

@InputType()
export class NestedEnumUsersStatusNullableWithAggregatesFilter {

    @Field(() => UsersStatus, {nullable:true})
    equals?: keyof typeof UsersStatus;

    @Field(() => [UsersStatus], {nullable:true})
    in?: Array<keyof typeof UsersStatus>;

    @Field(() => [UsersStatus], {nullable:true})
    notIn?: Array<keyof typeof UsersStatus>;

    @Field(() => NestedEnumUsersStatusNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumUsersStatusNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumUsersStatusNullableFilter, {nullable:true})
    _min?: NestedEnumUsersStatusNullableFilter;

    @Field(() => NestedEnumUsersStatusNullableFilter, {nullable:true})
    _max?: NestedEnumUsersStatusNullableFilter;
}
