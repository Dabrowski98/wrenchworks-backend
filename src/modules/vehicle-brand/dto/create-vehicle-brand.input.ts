import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateVehicleBrandInput {
  @Field()
  @IsNotEmpty()
  brandName: string;
}