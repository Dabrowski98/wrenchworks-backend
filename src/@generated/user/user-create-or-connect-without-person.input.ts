import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPersonInput } from './user-create-without-person.input';

@InputType()
export class UserCreateOrConnectWithoutPersonInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'userId' | 'personId' | 'username' | 'username'>;

    @Field(() => UserCreateWithoutPersonInput, {nullable:false})
    @Type(() => UserCreateWithoutPersonInput)
    create!: UserCreateWithoutPersonInput;
}
