import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutAddressInput } from './user-update-without-address.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { UserCreateWithoutAddressInput } from './user-create-without-address.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutAddressInput {

    @Field(() => UserUpdateWithoutAddressInput, {nullable:false})
    @Type(() => UserUpdateWithoutAddressInput)
    @ValidateNested()
    update!: UserUpdateWithoutAddressInput;

    @Field(() => UserCreateWithoutAddressInput, {nullable:false})
    @Type(() => UserCreateWithoutAddressInput)
    @ValidateNested()
    create!: UserCreateWithoutAddressInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
