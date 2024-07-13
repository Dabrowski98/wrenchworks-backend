import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePermissionSetInput {
  @Field(() => BigInt, { nullable: true })
  workshopId?: bigint;

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
}
