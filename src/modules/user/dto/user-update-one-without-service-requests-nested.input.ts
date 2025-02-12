import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutServiceRequestsInput } from './user-create-without-service-requests.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { UserCreateOrConnectWithoutServiceRequestsInput } from './user-create-or-connect-without-service-requests.input';
import { UserUpsertWithoutServiceRequestsInput } from './user-upsert-without-service-requests.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutServiceRequestsInput } from './user-update-to-one-with-where-without-service-requests.input';

@InputType()
export class UserUpdateOneWithoutServiceRequestsNestedInput {

    @Field(() => UserCreateWithoutServiceRequestsInput, {nullable:true})
    @Type(() => UserCreateWithoutServiceRequestsInput)
    @ValidateNested()
    create?: UserCreateWithoutServiceRequestsInput;

    @Field(() => UserCreateOrConnectWithoutServiceRequestsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutServiceRequestsInput)
    @ValidateNested()
    connectOrCreate?: UserCreateOrConnectWithoutServiceRequestsInput;

    @Field(() => UserUpsertWithoutServiceRequestsInput, {nullable:true})
    @Type(() => UserUpsertWithoutServiceRequestsInput)
    @ValidateNested()
    upsert?: UserUpsertWithoutServiceRequestsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'userId' | 'username' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutServiceRequestsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutServiceRequestsInput)
    @ValidateNested()
    update?: UserUpdateToOneWithWhereWithoutServiceRequestsInput;
}
