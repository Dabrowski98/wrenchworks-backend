import { Module } from "@nestjs/common";
import { EmployeePermissionResolver } from "./employee-permission.resolver";
import { EmployeePermissionService } from "./employee-permission.service";

@Module({
  providers: [EmployeePermissionResolver, EmployeePermissionService],
  exports: [EmployeePermissionService],
})
export class EmployeePermissionModule {}
