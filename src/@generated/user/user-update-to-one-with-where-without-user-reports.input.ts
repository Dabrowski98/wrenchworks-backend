import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutUserReportsInput } from './user-update-without-user-reports.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutUserReportsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutUserReportsInput, {nullable:false})
    @Type(() => UserUpdateWithoutUserReportsInput)
    data!: UserUpdateWithoutUserReportsInput;
}
