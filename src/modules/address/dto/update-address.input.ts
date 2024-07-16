import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateAddressInput {
  @Field({ nullable: true })
  country?: string;

  @Field({ nullable: true })
  region?: string;

  @Field({ nullable: true })
  city?: string;

  @Field({ nullable: true })
  street?: string;

  @Field({ nullable: true })
  buildingNo?: string;

  @Field({ nullable: true })
  flatNo?: string;

  @Field({ nullable: true })
  postCode?: string;
}
