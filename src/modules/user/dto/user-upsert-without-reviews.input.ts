import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutReviewsInput } from './user-update-without-reviews.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { UserCreateWithoutReviewsInput } from './user-create-without-reviews.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutReviewsInput {

    @Field(() => UserUpdateWithoutReviewsInput, {nullable:false})
    @Type(() => UserUpdateWithoutReviewsInput)
    @ValidateNested()
    update!: UserUpdateWithoutReviewsInput;

    @Field(() => UserCreateWithoutReviewsInput, {nullable:false})
    @Type(() => UserCreateWithoutReviewsInput)
    @ValidateNested()
    create!: UserCreateWithoutReviewsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
