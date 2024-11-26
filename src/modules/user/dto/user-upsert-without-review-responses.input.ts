import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutReviewResponsesInput } from './user-update-without-review-responses.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { UserCreateWithoutReviewResponsesInput } from './user-create-without-review-responses.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutReviewResponsesInput {

    @Field(() => UserUpdateWithoutReviewResponsesInput, {nullable:false})
    @Type(() => UserUpdateWithoutReviewResponsesInput)
    @ValidateNested()
    update!: UserUpdateWithoutReviewResponsesInput;

    @Field(() => UserCreateWithoutReviewResponsesInput, {nullable:false})
    @Type(() => UserCreateWithoutReviewResponsesInput)
    @ValidateNested()
    create!: UserCreateWithoutReviewResponsesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
