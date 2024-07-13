import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EmployeeService } from './employee.service';
import { Employee } from './entities/employee.entity';
import { CreateEmployeeInput, UpdateEmployeeInput } from './dto/index';

@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(private readonly employeeService: EmployeeService) {}

  @Mutation(() => Employee)
  async createEmployee(@Args('data') data: CreateEmployeeInput) {
    return this.employeeService.createEmployee(data);
  }

  @Mutation(() => Employee)
  async updateEmployee(
    @Args('employeeId', { type: () => BigInt }) employeeId: bigint,
    @Args('workshopId', { type: () => BigInt }) workshopId: bigint,
    @Args('data') data: UpdateEmployeeInput,
  ) {
    return this.employeeService.updateEmployee(employeeId, workshopId, data);
  }

  @Mutation(() => Employee)
  async deleteEmployee(
    @Args('employeeId', { type: () => BigInt }) employeeId: bigint,
    @Args('workshopId', { type: () => BigInt }) workshopId: bigint,
  ) {
    return this.employeeService.deleteEmployee(employeeId, workshopId);
  }

  @Query(() => [Employee])
  async employees() {
    return this.employeeService.findAllEmployees();
  }

  @Query(() => Employee, { nullable: true })
  async employee(
    @Args('employeeId', { type: () => BigInt }) employeeId: bigint,
    @Args('workshopId', { type: () => BigInt }) workshopId: bigint,
  ) {
    return this.employeeService.findEmployeeById(employeeId, workshopId);
  }
}
