import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutCustomersInput } from './user-update-without-customers.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { UserCreateWithoutCustomersInput } from './user-create-without-customers.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutCustomersInput {

    @Field(() => UserUpdateWithoutCustomersInput, {nullable:false})
    @Type(() => UserUpdateWithoutCustomersInput)
    @ValidateNested()
    update!: UserUpdateWithoutCustomersInput;

    @Field(() => UserCreateWithoutCustomersInput, {nullable:false})
    @Type(() => UserCreateWithoutCustomersInput)
    @ValidateNested()
    create!: UserCreateWithoutCustomersInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
