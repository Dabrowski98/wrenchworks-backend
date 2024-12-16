import { SetMetadata } from '@nestjs/common';
import { registerEnumType } from '@nestjs/graphql';

export enum EntityType {
  USER = 'USER',
  EMPLOYEE = 'EMPLOYEE',
}

registerEnumType(EntityType, {
  name: 'EntityType',
});
