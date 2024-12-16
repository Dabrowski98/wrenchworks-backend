import { EntityType } from 'src/common/enums/entity-type.enum';
import { UserRole } from 'src/modules/prisma';
import { JwtAuthBasePayload } from '../../common-dto/jwt-auth-base.payload';

export class JwtUserPayload extends JwtAuthBasePayload {
  role: UserRole;
}
