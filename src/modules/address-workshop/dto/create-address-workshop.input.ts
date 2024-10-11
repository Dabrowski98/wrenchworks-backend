import { InputType, Field } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CreateAddressInput } from 'src/modules/address/dto';
import { CreatePersonInput } from 'src/modules/person/dto';

@InputType()
export class CreateAddressWorkshopInput {

  @Field(() => BigInt)
  addressId: bigint;

  @Field(() => BigInt)
  personId: bigint;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => CreateAddressInput)
  address: CreateAddressInput;

  @Field(() => CreatePersonInput)
  person: CreatePersonInput;
}