import { Field, InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class WorkshopDeviceChangeNameInput {
  @Field(() => String, { nullable: false })
  @Validator.IsString({ message: 'Device name must be a string' })
  @Validator.Length(1, 255, {
    message: 'Device name must be between 1 and 255 characters',
  })
  @Validator.IsNotEmpty()
  deviceName!: string;
}
