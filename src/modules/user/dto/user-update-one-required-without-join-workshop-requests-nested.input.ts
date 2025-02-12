import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutJoinWorkshopRequestsInput } from './user-create-without-join-workshop-requests.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { UserCreateOrConnectWithoutJoinWorkshopRequestsInput } from './user-create-or-connect-without-join-workshop-requests.input';
import { UserUpsertWithoutJoinWorkshopRequestsInput } from './user-upsert-without-join-workshop-requests.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutJoinWorkshopRequestsInput } from './user-update-to-one-with-where-without-join-workshop-requests.input';

@InputType()
export class UserUpdateOneRequiredWithoutJoinWorkshopRequestsNestedInput {

    @Field(() => UserCreateWithoutJoinWorkshopRequestsInput, {nullable:true})
    @Type(() => UserCreateWithoutJoinWorkshopRequestsInput)
    @ValidateNested()
    create?: UserCreateWithoutJoinWorkshopRequestsInput;

    @Field(() => UserCreateOrConnectWithoutJoinWorkshopRequestsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutJoinWorkshopRequestsInput)
    @ValidateNested()
    connectOrCreate?: UserCreateOrConnectWithoutJoinWorkshopRequestsInput;

    @Field(() => UserUpsertWithoutJoinWorkshopRequestsInput, {nullable:true})
    @Type(() => UserUpsertWithoutJoinWorkshopRequestsInput)
    @ValidateNested()
    upsert?: UserUpsertWithoutJoinWorkshopRequestsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'userId' | 'username' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutJoinWorkshopRequestsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutJoinWorkshopRequestsInput)
    @ValidateNested()
    update?: UserUpdateToOneWithWhereWithoutJoinWorkshopRequestsInput;
}
