import { InputType, Field } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class LoginUserInput {
  @Field(() => String, { nullable: false })
  @Validator.IsNotEmpty({ message: 'Email is required' })
  @Validator.IsEmail({}, { message: 'Invalid email format' })
  email!: string;

  @Field(() => String, { nullable: false })
  @Validator.IsString({ message: 'Password must be a string' })
  @Validator.MinLength(8, {
    message: 'Password must be at least 8 characters long',
  })
  @Validator.IsNotEmpty({ message: 'Password is required' })
  password!: string;
}
