import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RequestDeviceRegistrationInput } from './request-device-registration.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class RequestDeviceRegistrationArgs {
  @Field(() => RequestDeviceRegistrationInput)
  @ValidateNested()
  @Type(() => RequestDeviceRegistrationInput)
  data!: RequestDeviceRegistrationInput;
}
