import { SetMetadata } from '@nestjs/common';
import { Action } from './ability.factory';
import { AppSubjects } from './ability.factory';

export interface RequiredRole {
  action: Action;
  subject: AppSubjects;
}

export const CHECK_ABILITY = 'check_ability';

export const CheckAbilities = (...requirements: RequiredRole[]) => {
  return SetMetadata(CHECK_ABILITY, requirements);
};
