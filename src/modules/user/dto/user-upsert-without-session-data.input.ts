import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutSessionDataInput } from './user-update-without-session-data.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { UserCreateWithoutSessionDataInput } from './user-create-without-session-data.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutSessionDataInput {

    @Field(() => UserUpdateWithoutSessionDataInput, {nullable:false})
    @Type(() => UserUpdateWithoutSessionDataInput)
    @ValidateNested()
    update!: UserUpdateWithoutSessionDataInput;

    @Field(() => UserCreateWithoutSessionDataInput, {nullable:false})
    @Type(() => UserCreateWithoutSessionDataInput)
    @ValidateNested()
    create!: UserCreateWithoutSessionDataInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
