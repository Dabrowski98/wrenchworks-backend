import { Field, ArgsType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { AddressCreateInput } from '../dto';
import { IsNotEmpty, ValidateNested } from 'class-validator';

@ArgsType()
export class CreateAddressForUserArgs {
  @Field(() => AddressCreateInput)
  @ValidateNested()
  data!: AddressCreateInput;

  @Field(() => GraphQLBigInt)
  @IsNotEmpty()
  userId!: bigint;
}
