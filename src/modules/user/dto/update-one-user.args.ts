import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserUpdateInput } from './user-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import * as Validator from 'class-validator';

@ArgsType()
export class UpdateOneUserArgs {

    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    @Validator.ValidateNested()
    data!: UserUpdateInput;

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @Validator.Allow()
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'userId' | 'personId' | 'username'>;
}
