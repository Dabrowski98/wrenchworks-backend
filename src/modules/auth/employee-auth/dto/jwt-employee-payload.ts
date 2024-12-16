import { UserRole } from 'src/modules/prisma';
import { LoggedInBy } from '../enums/loggedInBy.enum';
import { EntityType } from 'src/common/enums/entity-type.enum';

export class JwtEmployeePayload {
  sub: bigint;

  entityType: EntityType;

  loggedInBy: keyof typeof LoggedInBy;
}
