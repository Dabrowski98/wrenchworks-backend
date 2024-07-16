import { InputType, Field } from '@nestjs/graphql';

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
}
