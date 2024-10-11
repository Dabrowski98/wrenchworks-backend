import { ObjectType, Field } from '@nestjs/graphql';
import { AddressPerson } from 'src/modules/address-person/entities/address-person.entity';
import { AddressWorkshop } from 'src/modules/address-workshop/entities/address-workshop.entity';
import { Exclude } from 'class-transformer'

@ObjectType()
export class Address {
  @Field()
  addressId: bigint;

  @Field()
  country: string;

  @Field()
  region: string;

  @Exclude()
  @Field()
  city: string;

  @Field({ nullable: true })
  street?: string;

  @Field()
  buildingNo: string;

  @Field({ nullable: true })
  flatNo?: string;

  @Field()
  postCode: string;

  @Field(() => [AddressPerson], { nullable: true })
  addressPersons?: AddressPerson[];

  @Field(() => [AddressWorkshop], { nullable: true })
  addressWorkshops?: AddressWorkshop[];
}
