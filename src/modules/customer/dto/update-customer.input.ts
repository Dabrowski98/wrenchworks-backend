import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateCustomerInput } from './create-customer.input';

@InputType()
export class UpdateCustomerInput extends PartialType(CreateCustomerInput) {
  @Field()
  customerId: bigint;

  @Field()
  workshopId: bigint;

  @Field({ nullable: true })
  totalDue?: number;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  NIP?: string;

  @Field({ nullable: true })
  companyName?: string;

  @Field({ nullable: true })
  deletedAt?: Date;
}
