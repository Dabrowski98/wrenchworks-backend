import { InputType, Field } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { EmployeeCreateInput } from 'src/modules/employee/dto/employee-create.input';

@InputType()
export class RegisterEmployeeInput extends EmployeeCreateInput {}
