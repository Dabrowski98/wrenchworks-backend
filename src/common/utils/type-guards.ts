import { EntityType } from '../enums/entity-type.enum';
import { JwtEmployeePayload } from '../../modules/auth/employee-auth/dto';
import { JwtUserPayload } from '../../modules/auth/user-auth/dto';
import { JwtAuthBasePayload } from '../../modules/auth/common-dto/jwt-auth-base.payload';

/**
 * Type guard to check if payload is JwtEmployeePayload
 */
export function isEmployeePayload(
  entity: JwtAuthBasePayload,
): entity is JwtEmployeePayload {
  return entity.entityType === EntityType.EMPLOYEE;
}

/**
 * Type guard to check if payload is JwtUserPayload
 */
export function isUserPayload(
  entity: JwtAuthBasePayload,
): entity is JwtUserPayload {
  return entity.entityType === EntityType.USER;
}
