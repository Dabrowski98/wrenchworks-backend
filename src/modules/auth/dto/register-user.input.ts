import { InputType, Field } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { UserCreateInput } from 'src/modules/user/dto/user-create.input';

@InputType()
export class RegisterUserInput extends UserCreateInput {}
