import { SetMetadata } from "@nestjs/common";

export enum Type {
  USER = 'USER',
  EMPLOYEE = 'EMPLOYEE',
}

export const ENTITY_TYPE_KEY = 'entityType';
export const EntityType = (entityType: Type) => SetMetadata(ENTITY_TYPE_KEY, entityType);