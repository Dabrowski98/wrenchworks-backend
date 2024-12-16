import { Field } from '@nestjs/graphql';

import { InputType, OmitType } from '@nestjs/graphql';
import { WorkshopCreateInput } from 'src/modules/workshop/dto';
import { RegisterEmployeeInput } from '../../employee-auth/dto/register-employee.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@InputType()
export class RegisterWorkshopInput extends OmitType(WorkshopCreateInput, [
  'user',
] as const) {
  @Field(() => RegisterEmployeeInput, { nullable: false })
  @ValidateNested()
  @Type(() => RegisterEmployeeInput)
  ownerEmployee!: RegisterEmployeeInput;
}
