import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutReviewResponsesInput } from './user-create-without-review-responses.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class UserCreateOrConnectWithoutReviewResponsesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'userId' | 'addressId'>;

    @Field(() => UserCreateWithoutReviewResponsesInput, {nullable:false})
    @Type(() => UserCreateWithoutReviewResponsesInput)
    @ValidateNested()
    create!: UserCreateWithoutReviewResponsesInput;
}
