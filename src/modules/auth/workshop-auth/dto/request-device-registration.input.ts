import * as Validator from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class RequestDeviceRegistrationInput {
  @Field()
  @Validator.IsString()
  @Validator.IsNotEmpty()
  @Validator.Length(7, 7, { message: 'Code must be 7 characters long' })
  code!: string;

  @Field()
  @Validator.IsString()
  @Validator.IsNotEmpty()
  @Validator.Length(1, 255, {
    message: 'Device serial number must be between 1 and 255 characters',
  })
  deviceSerialNumber!: string;

  @Field()
  @Validator.IsString()
  @Validator.IsNotEmpty()
  @Validator.Length(1, 255, {
    message: 'Device name must be between 1 and 255 characters',
  })
  deviceName!: string;
}
