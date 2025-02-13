import { JwtEmployeePayload } from 'src/modules/auth/employee-auth/custom-dto/jwt-employee-payload';
import { Action } from '../ability.factory';
import { EntityType } from 'src/common/enums/entity-type.enum';
import { PrismaService } from 'src/database/prisma.service';
import { subject } from '@casl/ability';

export class EmployeeAbilityHandler {
  static async handle(
    can,
    cannot,
    employeePayload: JwtEmployeePayload,
    prisma: PrismaService,
  ) {
    employeePayload = {
      employeeId:
        employeePayload.employeeId && BigInt(employeePayload.employeeId),
      workshopId:
        employeePayload.workshopId && BigInt(employeePayload.workshopId),
      loggedInBy: employeePayload.loggedInBy,
      permissionIds: employeePayload.permissionIds,
      entityType: EntityType.EMPLOYEE,
    };

    const permissions = await prisma.employeePermission.findMany({
      where: {
        permissionId: {
          in: employeePayload.permissionIds,
        },
      },
    });

    const defaultCondition = {
      workshop: { is: { workshopId: employeePayload.workshopId } },
    };

    permissions.forEach((permission) => {
      const action = permission.action.toLowerCase();
      const subject = permission.subject;
      const conditions = permission.conditions;

      //swap out $workshopId with employeePayload.workshopId
      const conditionsString = JSON.stringify(conditions);
      const conditionsStringWithWorkshopId = conditionsString.replace(
        /\$workshopId/g,
        employeePayload.workshopId.toString(),
      );
      can(action, subject, JSON.parse(conditionsStringWithWorkshopId));
    });

  }
}
