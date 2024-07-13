import { ObjectType, Field } from '@nestjs/graphql';
import { Address } from 'src/modules/address/entities/address.entity';
import { Workshop } from 'src/modules/workshop/entities/workshop.entity';

@ObjectType()
export class AddressWorkshop {
  @Field(() => BigInt)
  addressId: bigint;

  @Field(() => BigInt)
  workshopId: bigint;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Address)
  address: Address;

  @Field(() => Workshop)
  workshop: Workshop;
}
