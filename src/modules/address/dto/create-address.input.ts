import { InputType, Field } from '@nestjs/graphql';
import { CreateAddressPersonInput } from 'src/modules/address-person/dto/create-address-person.input';
import { CreateAddressWorkshopInput } from 'src/modules/address-workshop/dto/create-address-workshop.input';
@InputType()
export class CreateAddressInput {

  @Field()
  country: string;

  @Field()
  region: string;

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

  @Field(() => [CreateAddressPersonInput], { nullable: true })
  addressPersons?: CreateAddressPersonInput[];

  @Field(() => [CreateAddressWorkshopInput], { nullable: true })
  addressWorkshops?: CreateAddressWorkshopInput[];
}