import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutReviewResponsesInput } from './user-update-without-review-responses.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutReviewResponsesInput } from './user-create-without-review-responses.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutReviewResponsesInput {

    @Field(() => UserUpdateWithoutReviewResponsesInput, {nullable:false})
    @Type(() => UserUpdateWithoutReviewResponsesInput)
    update!: UserUpdateWithoutReviewResponsesInput;

    @Field(() => UserCreateWithoutReviewResponsesInput, {nullable:false})
    @Type(() => UserCreateWithoutReviewResponsesInput)
    create!: UserCreateWithoutReviewResponsesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
