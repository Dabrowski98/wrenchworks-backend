import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Person } from 'src/modules/persons/entities/person.entity';
import { Workshop } from 'src/modules/workshops/entities/workshop.entity';

@ObjectType()
export class Customer {

  @Field()
  customerId: bigint;

  @Field()
  workshopId: bigint;

  @Field()
  totalDue: number;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  deletedAt?: Date;

  @Field({ nullable: true })
  NIP?: string;

  @Field({ nullable: true })
  companyName?: string;

  @Field(() => Person)
  person: Person;

  @Field(() => Workshop)
  workshop: Workshop;

  // @Field(() => [Service])
  // services: Service[];
}
