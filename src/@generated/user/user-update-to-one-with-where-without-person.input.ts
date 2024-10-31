import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutPersonInput } from './user-update-without-person.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutPersonInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutPersonInput, {nullable:false})
    @Type(() => UserUpdateWithoutPersonInput)
    data!: UserUpdateWithoutPersonInput;
}
