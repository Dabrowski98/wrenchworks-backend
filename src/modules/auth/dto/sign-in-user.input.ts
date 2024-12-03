import { InputType, Field } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class SignInUserInput {

  @Field(() => String, { description: 'The email of the user' })
  // @Validator.ValidateIf((o) => !o.telephoneNumber)
  @Validator.IsNotEmpty({ message: 'Email is required' })
  @Validator.IsEmail({}, { message: 'Invalid email format' })
  // @Validator.IsOptional()
  // email?: string;
  email!: string;

  // @Field(() => String, {nullable:true})
  // @Validator.IsString({ message: 'Telephone number must be a string' })
  // @Validator.Length(8, 12, { message: 'Telephone number must be between 8 and 12 characters' })
  // @Validator.Matches(/^\+?[0-9]{8, 12}$/, { message: 'Invalid telephone number format' })
  // @Validator.ValidateIf((o) => !o.email)
  // @Validator.IsOptional()
  // telephoneNumber?: string;

  @Field(() => String, { nullable: false })
  @Validator.IsString({ message: 'Password must be a string' })
  @Validator.MinLength(8, {
    message: 'Password must be at least 8 characters long',
  })
  @Validator.IsNotEmpty({ message: 'Password is required' })
  password!: string;
}
