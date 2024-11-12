import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersStatus } from './users-status.enum';

@InputType()
export class NestedEnumUsersStatusNullableFilter {

    @Field(() => UsersStatus, {nullable:true})
    equals?: keyof typeof UsersStatus;

    @Field(() => [UsersStatus], {nullable:true})
    in?: Array<keyof typeof UsersStatus>;

    @Field(() => [UsersStatus], {nullable:true})
    notIn?: Array<keyof typeof UsersStatus>;

    @Field(() => NestedEnumUsersStatusNullableFilter, {nullable:true})
    not?: NestedEnumUsersStatusNullableFilter;
}
