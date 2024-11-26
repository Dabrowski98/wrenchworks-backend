import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutEmployeesInput } from './user-update-without-employees.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { UserCreateWithoutEmployeesInput } from './user-create-without-employees.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutEmployeesInput {

    @Field(() => UserUpdateWithoutEmployeesInput, {nullable:false})
    @Type(() => UserUpdateWithoutEmployeesInput)
    @ValidateNested()
    update!: UserUpdateWithoutEmployeesInput;

    @Field(() => UserCreateWithoutEmployeesInput, {nullable:false})
    @Type(() => UserCreateWithoutEmployeesInput)
    @ValidateNested()
    create!: UserCreateWithoutEmployeesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
