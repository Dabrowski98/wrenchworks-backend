import { InputType, Field } from '@nestjs/graphql';
import { WorkshopsDetailsStatus } from '@prisma/client';

@InputType()
export class CreateWorkshopDetailsInput {
  @Field(() => BigInt)
  workshopId: bigint;

  @Field()
  rating: number;

  @Field()
  workshopName: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  telephoneNumber?: string;

  @Field({ nullable: true })
  logoURL?: string;

  @Field({ nullable: true })
  NIP?: string;

  @Field(() => Date, { nullable: true })
  deletedAt?: Date;
}
