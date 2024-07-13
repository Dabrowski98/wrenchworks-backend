import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCustomerInput {
  @Field()
  customerId: bigint;

  @Field()
  workshopId: bigint;

  @Field({ defaultValue: 0.00 })
  totalDue: number;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  NIP?: string;

  @Field({ nullable: true })
  companyName?: string;

  // Other fields can be added as needed
}
