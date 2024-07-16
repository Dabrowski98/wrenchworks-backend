import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Customer } from 'src/modules/customer/entities/customer.entity';

@ObjectType()
export class Workshop {
  @Field()
  workshopId: bigint;

  @Field()
  personId: bigint;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  isVerified?: boolean;

  @Field({ nullable: true })
  isManagingWork?: boolean;

  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;

  @Field(() => Date, { nullable: true })
  deletedAt?: Date;

  // @Field(() => Person)
  // person: Person;

  // @Field(() => [AddressWorkshop])
  // workshopAddresses: AddressWorkshop[];

  @Field(() => [Customer])
  customers: Customer[];

  // @Field(() => [Employee])
  // employees: Employee[];

  // @Field(() => [PermissionSet])
  // permissionSets: PermissionSet[];

  // @Field(() => [Review])
  // reviews: Review[];

  // @Field(() => [ServiceRequest])
  // serviceRequests: ServiceRequest[];

  // @Field(() => [Service])
  // services: Service[];

  // @Field(() => WorkshopDetails, { nullable: true })
  // workshopDetails?: WorkshopDetails;

  // @Field(() => [WorkshopJob])
  // workshopJobs: WorkshopJob[];

  // @Field(() => [WorkshopJobCategory])
  // workshopJobCategories: WorkshopJobCategory[];
}
