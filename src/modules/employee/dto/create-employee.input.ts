import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateEmployeeInput {
  @Field(() => BigInt)
  employeeId: bigint;

  @Field(() => BigInt)
  workshopId: bigint;

  @Field(() => Date, { nullable: true })
  joinedAt?: Date;

  @Field(() => Date, { nullable: true })
  deletedAt?: Date;

  @Field(() => BigInt, { nullable: true })
  permissionSetId?: bigint;

  // Relationships
  // @Field(() => CreatePermissionSetInput, { nullable: true })
  // permissionSet?: CreatePermissionSetInput;

  // @Field(() => CreateWorkshopInput)
  // workshop: CreateWorkshopInput;

  // @Field(() => CreatePersonInput)
  // person: CreatePersonInput;

  // @Field(() => [CreateServiceInput], { nullable: true })
  // services?: CreateServiceInput[];

  // @Field(() => [CreateEmployeeTaskInput], { nullable: true })
  // employeeTasks?: CreateEmployeeTaskInput[];
}
