import { UserRole } from 'src/modules/prisma';
import { LoggedInBy } from '../enums/loggedInBy.enum';
import { EntityType } from 'src/common/enums/entity-type.enum';
import { JwtAuthBasePayload } from '../../common-dto/jwt-auth-base.payload';

export class JwtEmployeePayload extends JwtAuthBasePayload {
  loggedInBy: keyof typeof LoggedInBy;
}
