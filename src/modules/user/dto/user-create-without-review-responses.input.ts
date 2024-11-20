import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { UsersStatus } from '../../prisma/dto/users-status.enum';
import { ReviewCreateNestedManyWithoutUserInput } from '../../review/dto/review-create-nested-many-without-user.input';
import { Type } from 'class-transformer';
import { UserReportCreateNestedManyWithoutUserInput } from '../../user-report/dto/user-report-create-nested-many-without-user.input';
import { PersonCreateNestedOneWithoutUserInput } from '../../person/dto/person-create-nested-one-without-user.input';


@InputType()
export class UserCreateWithoutReviewResponsesInput {

    @HideField()
    userId?: bigint | number;

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'Username must be a string' })
    @Validator.IsNotEmpty({ message: 'Username is required' })
    @Validator.Length(3, 30, { message: 'Username must be between 3 and 30 characters' })
    @Validator.Matches(/^[a-zA-Z0-9_-]+$/, { message: 'Username can only contain letters, numbers, underscores and hyphens' })
    username!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'Password must be a string' })
    @Validator.IsNotEmpty({ message: 'Password is required' })
    @Validator.MinLength(8, { message: 'Password must be at least 8 characters long' })
    @Validator.Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/, { message: 'Password must contain at least one letter, one number and one special character' })
    password!: string;

    @Field(() => String, {nullable:true})
    @Validator.IsEmail({}, { message: 'Invalid email format' })
    email?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Avatar URL must be a string' })
    @Validator.Length(0, 255, { message: 'Avatar URL cannot exceed 255 characters' })
    avatarURL?: string;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Is verified must be a boolean' })
    isVerified?: boolean;

    @Field(() => UsersStatus, {nullable:true})
    @Validator.IsEnum(UsersStatus, { message: 'Invalid user status' })
    status?: keyof typeof UsersStatus;

    @Field(() => Date, {nullable:true})
    @Validator.IsDate({ message: 'Created at must be a valid date' })
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    @Validator.IsDate({ message: 'Updated at must be a valid date' })
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @Field(() => ReviewCreateNestedManyWithoutUserInput, {nullable:true})
    @Type(() => ReviewCreateNestedManyWithoutUserInput)
    reviews?: ReviewCreateNestedManyWithoutUserInput;

    @Field(() => UserReportCreateNestedManyWithoutUserInput, {nullable:true})
    userReports?: UserReportCreateNestedManyWithoutUserInput;

    @Field(() => PersonCreateNestedOneWithoutUserInput, {nullable:true})
    @Type(() => PersonCreateNestedOneWithoutUserInput)
    person?: PersonCreateNestedOneWithoutUserInput;
}
