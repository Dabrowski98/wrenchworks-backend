import { InputType, OmitType } from '@nestjs/graphql';
import { EmployeeCreateInput } from '../../../employee/dto/employee-create.input';

@InputType()
export class RegisterEmployeeInput extends OmitType(EmployeeCreateInput, ['workshop'] as const) {}
