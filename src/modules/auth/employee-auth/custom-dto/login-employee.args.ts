import { InputType, Field, ArgsType } from '@nestjs/graphql';
import { IsString, Length, Matches, IsOptional, IsNotEmpty, MinLength, ValidateNested } from 'class-validator';
import * as Scalars from 'graphql-scalars';
import { LoginEmployeeInput } from './login-employee.input';
import { Type } from 'class-transformer';

@ArgsType()
export class LoginEmployeeArgs {
  @Field(() => LoginEmployeeInput)
  @ValidateNested()
  @Type(() => LoginEmployeeInput)
  data!: LoginEmployeeInput;
}
