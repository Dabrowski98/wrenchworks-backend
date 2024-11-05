import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { UsersStatus } from '../prisma/users-status.enum';
import { ReviewCreateNestedManyWithoutUserInput } from '../review/review-create-nested-many-without-user.input';
import { Type } from 'class-transformer';
import { ReviewResponseCreateNestedManyWithoutUserInput } from '../review-response/review-response-create-nested-many-without-user.input';
import { PersonCreateNestedOneWithoutUserInput } from '../person/person-create-nested-one-without-user.input';

@InputType()
export class UserCreateWithoutUserReportsInput {

    @HideField()
    userId?: bigint | number;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;

    @Field(() => UsersStatus, {nullable:true})
    status?: keyof typeof UsersStatus;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @Field(() => ReviewCreateNestedManyWithoutUserInput, {nullable:true})
    @Type(() => ReviewCreateNestedManyWithoutUserInput)
    reviews?: ReviewCreateNestedManyWithoutUserInput;

    @Field(() => ReviewResponseCreateNestedManyWithoutUserInput, {nullable:true})
    @Type(() => ReviewResponseCreateNestedManyWithoutUserInput)
    reviewResponses?: ReviewResponseCreateNestedManyWithoutUserInput;

    @Field(() => PersonCreateNestedOneWithoutUserInput, {nullable:true})
    @Type(() => PersonCreateNestedOneWithoutUserInput)
    person?: PersonCreateNestedOneWithoutUserInput;
}
