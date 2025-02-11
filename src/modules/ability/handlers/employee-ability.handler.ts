import { JwtEmployeePayload } from 'src/modules/auth/employee-auth/dto';
import { Action } from '../ability.factory';
import { EntityType } from 'src/common/enums/entity-type.enum';

export class EmployeeAbilityHandler {
  static handle(can, cannot, employeePayload: JwtEmployeePayload) {
    employeePayload = {
      employeeId:
        employeePayload.employeeId && BigInt(employeePayload.employeeId),
      workshopId:
        employeePayload.workshopId && BigInt(employeePayload.workshopId),
      loggedInBy: employeePayload.loggedInBy,
      permissions: employeePayload.permissions || [],
      entityType: EntityType.EMPLOYEE,
    };

    cannot(Action.Manage, 'all', {
      workshop: { isNot: { workshopId: employeePayload.workshopId } },
    });
    can(Action.Read, 'Workshop', {
      workshopId: employeePayload.workshopId,
    });
    can(Action.Read, 'WorkshopDetails', {
      workshopId: employeePayload.workshopId,
    });

    const defaultCondition = {
      workshop: { is: { workshopId: employeePayload.workshopId } },
    };

    employeePayload.permissions.forEach((permission) => {
      can(
        permission.action,
        permission.subject,
        permission.conditions || defaultCondition,
      );
    });
  }
}
