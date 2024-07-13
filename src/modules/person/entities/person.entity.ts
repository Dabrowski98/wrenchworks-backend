import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Customer } from 'src/modules/customer/entities/customer.entity';

@ObjectType()
export class Person {
  @Field()
  personId: bigint;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field({ nullable: true })
  telephoneNumber?: string;

  @Field(() => Date, { nullable: true })
  deletedAt?: Date;

  @Field(() => [Customer])
  customers: Customer[];
}
