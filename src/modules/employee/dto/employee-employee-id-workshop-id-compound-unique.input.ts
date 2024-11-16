import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import * as Scalars from 'graphql-scalars';

@InputType()
export class EmployeeEmployeeIdWorkshopIdCompoundUniqueInput {
  @Field(() => Scalars.GraphQLBigInt, { nullable: false })
  @Validator.IsNotEmpty({ message: 'Employee ID is required' })
  employeeId!: bigint | number;

  @Field(() => Scalars.GraphQLBigInt, { nullable: false })
  @Validator.IsNotEmpty({ message: 'Workshop ID is required' })
  workshopId!: bigint | number;
}
