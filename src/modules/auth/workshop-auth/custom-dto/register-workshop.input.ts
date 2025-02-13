import { Field, InputType } from '@nestjs/graphql';
import { WorkshopCreateInput } from 'src/modules/workshop/dto';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { EmployeeCreateInput } from 'src/modules/employee/dto';

@InputType()
export class RegisterWorkshopInput {
  @Field(() => WorkshopCreateInput, { nullable: false })
  @ValidateNested()
  @Type(() => WorkshopCreateInput)
  workshop!: WorkshopCreateInput;

  @Field(() => EmployeeCreateInput, { nullable: false })
  @ValidateNested()
  @Type(() => EmployeeCreateInput)
  ownerEmployee!: EmployeeCreateInput;
}
