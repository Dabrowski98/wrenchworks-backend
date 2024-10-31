import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutReviewResponsesInput } from './user-update-without-review-responses.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutReviewResponsesInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutReviewResponsesInput, {nullable:false})
    @Type(() => UserUpdateWithoutReviewResponsesInput)
    data!: UserUpdateWithoutReviewResponsesInput;
}
