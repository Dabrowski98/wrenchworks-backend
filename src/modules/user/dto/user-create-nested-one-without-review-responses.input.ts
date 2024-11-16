import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReviewResponsesInput } from './user-create-without-review-responses.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutReviewResponsesInput } from './user-create-or-connect-without-review-responses.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutReviewResponsesInput {

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'userId' | 'personId' | 'username' | 'username'>;
}
