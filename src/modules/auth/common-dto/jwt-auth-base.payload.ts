import { EntityType } from 'src/common/enums/entity-type.enum';

export class JwtAuthBasePayload {
  sub: bigint;
  entityType: EntityType;
}
