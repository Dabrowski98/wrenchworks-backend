import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutServiceRequestsInput } from './user-create-without-service-requests.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class UserCreateOrConnectWithoutServiceRequestsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'userId' | 'username' | 'email'>;

    @Field(() => UserCreateWithoutServiceRequestsInput, {nullable:false})
    @Type(() => UserCreateWithoutServiceRequestsInput)
    @ValidateNested()
    create!: UserCreateWithoutServiceRequestsInput;
}
