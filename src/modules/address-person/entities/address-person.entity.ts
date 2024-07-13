import { ObjectType, Field } from '@nestjs/graphql';
import { Address } from 'src/modules/address/entities/address.entity';
import { Person } from 'src/modules/person/entities/person.entity';

@ObjectType()
export class AddressPerson {
  @Field(() => BigInt)
  addressId: bigint;

  @Field(() => BigInt)
  personId: bigint;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Address)
  address: Address;

  @Field(() => Person)
  person: Person;
}
