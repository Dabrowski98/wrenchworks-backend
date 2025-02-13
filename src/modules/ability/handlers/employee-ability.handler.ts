import { JwtEmployeePayload } from 'src/modules/auth/employee-auth/custom-dto/jwt-employee-payload';
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

    // cannot(Action.Manage, 'all', {
    //   workshop: { isNot: { workshopId: employeePayload.workshopId } },
    // });
    // can(Action.Read, 'Workshop', {
    //   workshopId: employeePayload.workshopId,
    // });
    // can(Action.Read, 'WorkshopDetails', {
    //   workshopId: employeePayload.workshopId,
    // });
    can(Action.Read, 'Customer', {
      workshop: { is: { workshopId: employeePayload.workshopId } },
    });

    can(Action.Read, 'Service', {
      workshop: { is: { workshopId: employeePayload.workshopId } },
    });

    can(Action.Read, 'Address', {
      workshop: { is: { workshopId: employeePayload.workshopId } },
    });

    can(Action.Update, 'Address', {
      workshop: { is: { workshopId: employeePayload.workshopId } },
    });

    can(Action.Read, 'Guest', {
      serviceRequest: { workshopId: employeePayload.workshopId },
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
