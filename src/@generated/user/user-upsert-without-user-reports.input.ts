import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutUserReportsInput } from './user-update-without-user-reports.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUserReportsInput } from './user-create-without-user-reports.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutUserReportsInput {

    @Field(() => UserUpdateWithoutUserReportsInput, {nullable:false})
    @Type(() => UserUpdateWithoutUserReportsInput)
    update!: UserUpdateWithoutUserReportsInput;

    @Field(() => UserCreateWithoutUserReportsInput, {nullable:false})
    @Type(() => UserCreateWithoutUserReportsInput)
    create!: UserCreateWithoutUserReportsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
