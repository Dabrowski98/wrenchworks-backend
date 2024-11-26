import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutAddressInput } from './user-update-without-address.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutAddressInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutAddressInput, {nullable:false})
    @Type(() => UserUpdateWithoutAddressInput)
    data!: UserUpdateWithoutAddressInput;
}
