import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutWorkshopsInput } from './user-create-without-workshops.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { UserCreateOrConnectWithoutWorkshopsInput } from './user-create-or-connect-without-workshops.input';
import { UserUpsertWithoutWorkshopsInput } from './user-upsert-without-workshops.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutWorkshopsInput } from './user-update-to-one-with-where-without-workshops.input';

@InputType()
export class UserUpdateOneRequiredWithoutWorkshopsNestedInput {

    @Field(() => UserCreateWithoutWorkshopsInput, {nullable:true})
    @Type(() => UserCreateWithoutWorkshopsInput)
    @ValidateNested()
    create?: UserCreateWithoutWorkshopsInput;

    @Field(() => UserCreateOrConnectWithoutWorkshopsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutWorkshopsInput)
    @ValidateNested()
    connectOrCreate?: UserCreateOrConnectWithoutWorkshopsInput;

    @Field(() => UserUpsertWithoutWorkshopsInput, {nullable:true})
    @Type(() => UserUpsertWithoutWorkshopsInput)
    @ValidateNested()
    upsert?: UserUpsertWithoutWorkshopsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'userId' | 'username' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutWorkshopsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutWorkshopsInput)
    @ValidateNested()
    update?: UserUpdateToOneWithWhereWithoutWorkshopsInput;
}
