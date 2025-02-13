import { ArgsType, Field } from '@nestjs/graphql';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { RegisterWorkshopInput } from './register-workshop.input';

@ArgsType()
export class RegisterWorkshopArgs {

  @Field(() => RegisterWorkshopInput, { nullable: false })
  @ValidateNested()
  @Type(() => RegisterWorkshopInput)
  data!: RegisterWorkshopInput;
}
