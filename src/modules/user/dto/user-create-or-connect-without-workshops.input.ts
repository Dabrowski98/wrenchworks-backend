import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutWorkshopsInput } from './user-create-without-workshops.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class UserCreateOrConnectWithoutWorkshopsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'userId' | 'email' | 'addressId'>;

    @Field(() => UserCreateWithoutWorkshopsInput, {nullable:false})
    @Type(() => UserCreateWithoutWorkshopsInput)
    @ValidateNested()
    create!: UserCreateWithoutWorkshopsInput;
}
