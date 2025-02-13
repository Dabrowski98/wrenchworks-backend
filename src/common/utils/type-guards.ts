import { EntityType } from '../enums/entity-type.enum';
import { JwtAuthBasePayload } from '../../modules/auth/common-dto/jwt-auth-base.payload';
import { JwtEmployeePayload } from 'src/modules/auth/employee-auth/custom-dto/jwt-employee-payload';
import { JwtUserPayload } from 'src/modules/auth/user-auth/custom-dto/jwt-user-payload';

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
