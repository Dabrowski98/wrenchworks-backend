import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReviewResponsesInput } from './user-create-without-review-responses.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { UserCreateOrConnectWithoutReviewResponsesInput } from './user-create-or-connect-without-review-responses.input';
import { UserUpsertWithoutReviewResponsesInput } from './user-upsert-without-review-responses.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutReviewResponsesInput } from './user-update-to-one-with-where-without-review-responses.input';

@InputType()
export class UserUpdateOneRequiredWithoutReviewResponsesNestedInput {

    @Field(() => UserCreateWithoutReviewResponsesInput, {nullable:true})
    @Type(() => UserCreateWithoutReviewResponsesInput)
    @ValidateNested()
    create?: UserCreateWithoutReviewResponsesInput;

    @Field(() => UserCreateOrConnectWithoutReviewResponsesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutReviewResponsesInput)
    @ValidateNested()
    connectOrCreate?: UserCreateOrConnectWithoutReviewResponsesInput;

    @Field(() => UserUpsertWithoutReviewResponsesInput, {nullable:true})
    @Type(() => UserUpsertWithoutReviewResponsesInput)
    @ValidateNested()
    upsert?: UserUpsertWithoutReviewResponsesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'userId' | 'addressId'>;

    @Field(() => UserUpdateToOneWithWhereWithoutReviewResponsesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutReviewResponsesInput)
    @ValidateNested()
    update?: UserUpdateToOneWithWhereWithoutReviewResponsesInput;
}
