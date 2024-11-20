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


@InputType()
export class UserUpdatePasswordInput {

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Password must be a string' })
    @Validator.IsOptional()
    @Validator.MinLength(8, { message: 'Password must be at least 8 characters long' })
    @Validator.Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/, { message: 'Password must contain at least one letter, one number and one special character' })
    password?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'New password must be a string' })
    @Validator.IsOptional()
    @Validator.MinLength(8, { message: 'New password must be at least 8 characters long' })
    @Validator.Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/, { message: 'New password must contain at least one letter, one number and one special character' })
    newPassword?: string;

}
