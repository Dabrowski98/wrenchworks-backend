import { ObjectType, Field, registerEnumType } from '@nestjs/graphql';
import { Workshop } from '../../workshop/entities/workshop.entity';
import { WorkshopsDetailsStatus } from '@prisma/client';

@ObjectType()
export class WorkshopDetails {
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

  @Field(() => WorkshopsDetailsStatus)
  status: WorkshopsDetailsStatus;

  @Field({ nullable: true })
  NIP?: string; 

  @Field(() => Date, { nullable: true })
  deletedAt?: Date;

  @Field(() => Workshop)
  workshop: Workshop;
}

registerEnumType(WorkshopsDetailsStatus, {
  name: 'WorkshopsDetailsStatus',
});
