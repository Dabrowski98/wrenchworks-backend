import { Module } from '@nestjs/common';
import { EmployeeTaskResolver } from './employee-task.resolver';
import { EmployeeTaskService } from './employee-task.service';

@Module({
  providers: [EmployeeTaskResolver, EmployeeTaskService],
})
export class EmployeeTaskModule {}
