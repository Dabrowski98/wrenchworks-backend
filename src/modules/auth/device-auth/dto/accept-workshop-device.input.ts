import * as Validator from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';

@InputType()
export class AcceptWorkshopDeviceInput {
  @Field(() => Scalars.GraphQLBigInt)
  @Validator.IsNotEmpty()
  deviceId!: bigint;

  @Field()
  @Validator.IsString()
  @Validator.IsNotEmpty()
  @Validator.Length(1, 255, {
    message: 'Device name must be between 1 and 255 characters',
  })
  deviceName!: string;

  @Field(() => Scalars.GraphQLBigInt)
  @Validator.IsNotEmpty()
  workshopId!: bigint;
}
