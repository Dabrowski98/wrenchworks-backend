import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutCustomersInput } from './user-update-without-customers.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutCustomersInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutCustomersInput, {nullable:false})
    @Type(() => UserUpdateWithoutCustomersInput)
    data!: UserUpdateWithoutCustomersInput;
}
