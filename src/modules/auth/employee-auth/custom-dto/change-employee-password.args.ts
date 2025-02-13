import { InputType, Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import * as Validator from 'class-validator';
import { ValidateNested } from 'class-validator';
import { EmployeeWhereUniqueInput } from 'src/modules/employee/dto';
import { ChangePasswordInput } from '../../common-dto/change-password.input';
import { Prisma } from '@prisma/client';

@ArgsType()
export class ChangeEmployeePasswordArgs {
  @Field(() => ChangePasswordInput)
  @ValidateNested()
  @Type(() => ChangePasswordInput)
  data!: ChangePasswordInput;

  @Field(() => EmployeeWhereUniqueInput, { nullable: false })
  @Type(() => EmployeeWhereUniqueInput)
  where!: Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId'>;
}
