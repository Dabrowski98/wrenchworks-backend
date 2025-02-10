import { ArgsType, Field } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { AddressCreateInput } from '../dto';
import { IsNotEmpty, ValidateNested } from 'class-validator';

@ArgsType()
export class CreateAddressForWorkshopArgs {
  @Field(() => AddressCreateInput)
  @ValidateNested()
  data!: AddressCreateInput;

  @Field(() => GraphQLBigInt)
  @IsNotEmpty()
  workshopId!: bigint;
}
