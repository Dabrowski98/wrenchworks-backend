import { EntityType } from 'src/common/enums/entity-type.enum';
import { UserRole } from 'src/modules/prisma';

export class JwtUserPayload {
  sub: bigint;

  entityType: EntityType;

  role: UserRole;
}
