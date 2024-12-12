import { ObjectType, Field } from '@nestjs/graphql';
import { Employee } from 'src/modules/employee/dto/employee.model';

@ObjectType()
export class LoginEmployeeResponse {
  @Field()
  accessToken: string;

  @Field()
  refreshToken: string;

  @Field(() => Employee)
  employee: Employee;
}
