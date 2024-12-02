import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutSessionDataInput } from './user-update-without-session-data.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutSessionDataInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutSessionDataInput, {nullable:false})
    @Type(() => UserUpdateWithoutSessionDataInput)
    data!: UserUpdateWithoutSessionDataInput;
}
