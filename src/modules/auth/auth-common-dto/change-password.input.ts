import { InputType, Field } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class ChangePasswordInput {
    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'Old password must be a string' })
    @Validator.MinLength(8, { message: 'Old password must be at least 8 characters long' })
    @Validator.Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, { message: 'Old password must contain at least one letter, one number and one special character' })
    @Validator.IsNotEmpty({message: 'Old password is required'})
    oldPassword!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'New password must be a string' })
    @Validator.MinLength(8, { message: 'New password must be at least 8 characters long' })
    @Validator.Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, { message: 'New password must contain at least one letter, one number and one special character' })
    @Validator.IsNotEmpty({message: 'New password is required'})
    newPassword!: string;
}