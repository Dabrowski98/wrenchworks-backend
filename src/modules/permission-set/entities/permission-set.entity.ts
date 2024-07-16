import { ObjectType, Field } from '@nestjs/graphql';
import { Employee } from '../../employee/entities/employee.entity';
// import { Workshop } from '../workshop/workshop.entity'; // Uncomment if needed

@ObjectType()
export class PermissionSet {
  @Field(() => BigInt)
  permissionSetId: bigint;

  @Field(() => BigInt, { nullable: true })
  workshopId: bigint | null;

  @Field()
  setName: string;

  @Field()
  canReadWorkshopDetails: boolean;

  @Field()
  canUpdateWorkshopDetails: boolean;

  @Field()
  canModifyWorkshopDetails: boolean;

  @Field()
  canReadEmployees: boolean;

  @Field()
  canUpdateEmployees: boolean;

  @Field()
  canModifyEmployees: boolean;

  @Field()
  canReadCustomers: boolean;

  @Field()
  canUpdateCustomers: boolean;

  @Field()
  canModifyCustomers: boolean;

  @Field()
  canReadServices: boolean;

  @Field()
  canUpdateServices: boolean;

  @Field()
  canModifyServices: boolean;

  @Field()
  canReadTasks: boolean;

  @Field()
  canUpdateTasks: boolean;

  @Field()
  canModifyTasks: boolean;

  @Field()
  canReadReports: boolean;

  @Field()
  canGenerateReports: boolean;

  @Field()
  canModifyPermissions: boolean;

  // @Field(() => [Employee])
  // employees: Employee[];

  // @Field(() => Workshop, { nullable: true })
  // workshop: Workshop | null;
}