import { InputType, Field } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class UpdateEmployeeTaskInput {
  @Field(() => BigInt, { nullable: true })
  @IsOptional()
  taskId?: bigint;

  @Field(() => BigInt, { nullable: true })
  @IsOptional()
  employeeId?: bigint;

  @Field(() => BigInt, { nullable: true })
  @IsOptional()
  workshopId?: bigint;
}
