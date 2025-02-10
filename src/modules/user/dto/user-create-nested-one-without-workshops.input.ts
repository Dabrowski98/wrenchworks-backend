import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutWorkshopsInput } from './user-create-without-workshops.input';
import { HideField } from '@nestjs/graphql';
import { UserCreateOrConnectWithoutWorkshopsInput } from './user-create-or-connect-without-workshops.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class UserCreateNestedOneWithoutWorkshopsInput {

    @HideField()
    create?: UserCreateWithoutWorkshopsInput;

    @HideField()
    connectOrCreate?: UserCreateOrConnectWithoutWorkshopsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'userId' | 'username' | 'email' | 'addressId'>;
}
