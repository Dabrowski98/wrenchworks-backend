import { UserRole } from 'src/modules/prisma';
import { LoggedInBy } from '../enums/loggedInBy.enum';
import { EntityType } from 'src/common/enums/entity-type.enum';
import { JwtAuthBasePayload } from '../../common-dto/jwt-auth-base.payload';
import { EmployeePermission } from 'src/modules/employee-permission/dto/employee-permission.model';

export class JwtEmployeePayload extends JwtAuthBasePayload {
  employeeId: bigint;
  workshopId: bigint;
  loggedInBy: keyof typeof LoggedInBy;
  permissions: EmployeePermission[];
}

