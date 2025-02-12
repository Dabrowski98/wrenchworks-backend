import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutJoinWorkshopRequestsInput } from './user-create-without-join-workshop-requests.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class UserCreateOrConnectWithoutJoinWorkshopRequestsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'userId' | 'username' | 'email'>;

    @Field(() => UserCreateWithoutJoinWorkshopRequestsInput, {nullable:false})
    @Type(() => UserCreateWithoutJoinWorkshopRequestsInput)
    @ValidateNested()
    create!: UserCreateWithoutJoinWorkshopRequestsInput;
}
