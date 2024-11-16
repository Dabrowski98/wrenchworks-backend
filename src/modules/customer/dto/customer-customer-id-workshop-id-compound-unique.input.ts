import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import * as Scalars from 'graphql-scalars';

@InputType()
export class CustomerCustomerIdWorkshopIdCompoundUniqueInput {
  @Field(() => Scalars.GraphQLBigInt, { nullable: false })
  @Validator.IsNotEmpty({ message: 'Customer ID is required' })
  customerId!: bigint | number;

  @Field(() => Scalars.GraphQLBigInt, { nullable: false })
  @Validator.IsNotEmpty({ message: 'Workshop ID is required' })
  workshopId!: bigint | number;
}
