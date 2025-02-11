import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { Action } from './ability.factory';
import { AppSubjects } from './ability.factory';
import { AbilitiesGuard } from './abilities.guard';

export interface RequiredRole {
  action: Action;
  subject: AppSubjects;
}

export const CHECK_ABILITY = 'check_ability';

export const CheckAbilities = (...requirements: RequiredRole[]) => {
  return applyDecorators(
    SetMetadata(CHECK_ABILITY, requirements),
    UseGuards(AbilitiesGuard),
  );
};
