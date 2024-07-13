import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateEmployeeInput } from './create-employee.input';

@InputType()
export class UpdateEmployeeInput extends PartialType(CreateEmployeeInput) {
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
  // @Field(() => UpdatePermissionSetInput, { nullable: true })
  // permissionSet?: UpdatePermissionSetInput;

  // @Field(() => UpdateWorkshopInput)
  // workshop: UpdateWorkshopInput;

  // @Field(() => UpdatePersonInput)
  // person: UpdatePersonInput;

  // @Field(() => [UpdateServiceInput], { nullable: true })
  // services?: UpdateServiceInput[];

  // @Field(() => [UpdateEmployeeTaskInput], { nullable: true })
  // employeeTasks?: UpdateEmployeeTaskInput[];
}
