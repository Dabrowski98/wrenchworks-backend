import { InputType, Field } from '@nestjs/graphql';
import { WorkshopsDetailsStatus } from '@prisma/client';

@InputType()
export class UpdateWorkshopDetailsInput {
  @Field(() => BigInt)
  workshopId: bigint;

  @Field({ nullable: true })
  rating?: number;

  @Field({ nullable: true })
  workshopName?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  telephoneNumber?: string;

  @Field({ nullable: true })
  logoURL?: string;

  @Field(() => WorkshopsDetailsStatus, { nullable: true })
  status?: WorkshopsDetailsStatus;

  @Field({ nullable: true })
  NIP?: string;

  @Field(() => Date, { nullable: true })
  deletedAt?: Date;
}
