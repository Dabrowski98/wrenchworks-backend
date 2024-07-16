import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateEmployeeTaskInput {
  @Field(() => BigInt)
  @IsNotEmpty()
  taskId: bigint;

  @Field(() => BigInt)
  @IsNotEmpty()
  employeeId: bigint;

  @Field(() => BigInt)
  @IsNotEmpty()
  workshopId: bigint;
}
