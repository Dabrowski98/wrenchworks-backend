import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { UsersStatus } from '../../prisma/dto/users-status.enum';
import { ReviewUpdateManyWithoutUserNestedInput } from '../../review/dto/review-update-many-without-user-nested.input';
import { Type } from 'class-transformer';
import { ReviewResponseUpdateManyWithoutUserNestedInput } from '../../review-response/dto/review-response-update-many-without-user-nested.input';
import { UserReportUpdateManyWithoutUserNestedInput } from '../../user-report/dto/user-report-update-many-without-user-nested.input';
import { PersonUpdateOneWithoutUserNestedInput } from '../../person/dto/person-update-one-without-user-nested.input';
import { CREATE, UPDATE } from 'src/constants/validation-groups';
import { PersonUpdateInput } from 'src/modules/person/dto';


@InputType()
export class UserUpdateInput {

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Username must be a string' })
    @Validator.IsOptional()
    @Validator.Length(3, 30, { message: 'Username must be between 3 and 30 characters' })
    @Validator.Matches(/^[a-zA-Z0-9_-]+$/, { message: 'Username can only contain letters, numbers, underscores and hyphens' })
    username?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsOptional()
    @Validator.IsEmail({}, { message: 'Invalid email format' })
    email?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Avatar URL must be a string' })
    @Validator.IsOptional()
    @Validator.Length(0, 255, { message: 'Avatar URL cannot exceed 255 characters' })
    avatarURL?: string;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Is verified must be a boolean' })
    @Validator.IsOptional()
    isVerified?: boolean;

    @Field(() => UsersStatus, {nullable:true})
    @Validator.IsEnum(UsersStatus, { message: 'Invalid user status' })
    @Validator.IsOptional()
    status?: keyof typeof UsersStatus;
}
