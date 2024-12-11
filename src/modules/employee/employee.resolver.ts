import { Args, Query, Resolver } from '@nestjs/graphql';
import { Employee, FindUniqueEmployeeArgs } from './dto';
import { EmployeeService } from './employee.service';

@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(private readonly employeeService: EmployeeService) {}

  @Query(() => Employee)
  async findEmployee(@Args() args: FindUniqueEmployeeArgs): Promise<Employee | null> {
    return this.employeeService.findEmployee(args);
  }
}
