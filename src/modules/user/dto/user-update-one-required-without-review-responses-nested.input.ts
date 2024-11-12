import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReviewResponsesInput } from './user-create-without-review-responses.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutReviewResponsesInput } from './user-create-or-connect-without-review-responses.input';
import { UserUpsertWithoutReviewResponsesInput } from './user-upsert-without-review-responses.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutReviewResponsesInput } from './user-update-to-one-with-where-without-review-responses.input';

@InputType()
export class UserUpdateOneRequiredWithoutReviewResponsesNestedInput {

    @Field(() => UserCreateWithoutReviewResponsesInput, {nullable:true})
    @Type(() => UserCreateWithoutReviewResponsesInput)
    create?: UserCreateWithoutReviewResponsesInput;

    @Field(() => UserCreateOrConnectWithoutReviewResponsesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutReviewResponsesInput)
    connectOrCreate?: UserCreateOrConnectWithoutReviewResponsesInput;

    @Field(() => UserUpsertWithoutReviewResponsesInput, {nullable:true})
    @Type(() => UserUpsertWithoutReviewResponsesInput)
    upsert?: UserUpsertWithoutReviewResponsesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'userId' | 'personId' | 'username' | 'username'>;

    @Field(() => UserUpdateToOneWithWhereWithoutReviewResponsesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutReviewResponsesInput)
    update?: UserUpdateToOneWithWhereWithoutReviewResponsesInput;
}
